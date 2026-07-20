import { PEOPLE, fmt, showToast, compressImage } from "../utils/helpers";
import { state, saveDB } from "../utils/state";
import { auditEvent } from "../auth/audit";

export function calcDebts() {
  const db = state.db;
  // Build net balance: positive = they are owed money, negative = they owe money
  const balance = {};
  PEOPLE.forEach(p => balance[p] = 0);

  // Re-compute correctly using raw flows
  db.transactions.forEach(tx => {
    if (tx.type === 'food') {
      const share = Math.round(tx.amount / tx.participants.length);
      tx.participants.forEach(p => {
        if (p !== tx.payer) {
          balance[p] -= share;
          balance[tx.payer] += share;
        }
      });
    } else if (tx.type === 'card') {
      tx.breakdown.forEach(b => {
        if (b.person !== tx.payer) {
          balance[b.person] -= b.amount;
          balance[tx.payer] += b.amount;
        }
      });
    }
  });

  // Apply settlements
  db.settlements.forEach(s => {
    balance[s.from] += s.amount;
    balance[s.to] -= s.amount;
  });

  // Generate transfer suggestions
  const debtors = PEOPLE.filter(p => balance[p] < 0).map(p => ({ name: p, amt: balance[p] }));
  const creditors = PEOPLE.filter(p => balance[p] > 0).map(p => ({ name: p, amt: balance[p] }));
  const transfers = [];

  const d2 = debtors.map(x => ({ ...x }));
  const c2 = creditors.map(x => ({ ...x }));

  let ci = 0, di = 0;
  while (di < d2.length && ci < c2.length) {
    const pay = Math.min(-d2[di].amt, c2[ci].amt);
    if (pay > 0) {
      transfers.push({ from: d2[di].name, to: c2[ci].name, amount: pay });
    }
    d2[di].amt += pay;
    c2[ci].amt -= pay;
    if (d2[di].amt === 0) di++;
    if (c2[ci].amt === 0) ci++;
  }

  // Render
  let html = '';
  PEOPLE.forEach(p => {
    const b = balance[p];
    let statusHTML = '';
    const related = transfers.filter(t => t.from === p || t.to === p);
    if (Math.abs(b) < 1) {
      statusHTML = `<div class="debt-row"><span>Không nợ ai</span><span class="amount-zero">✔ Hòa</span></div>`;
    } else {
      related.forEach(t => {
        if (t.from === p) {
          statusHTML += `<div class="debt-row"><span>→ Cần trả <strong>${t.to}</strong></span><span class="amount-pos">${fmt(t.amount)}</span></div>`;
        } else {
          statusHTML += `<div class="debt-row"><span>← Được nhận từ <strong>${t.from}</strong></span><span class="amount-neg">${fmt(t.amount)}</span></div>`;
        }
      });
    }
    html += `
      <div class="debt-result">
        <div class="debt-name">${p} <span style="font-size:0.85rem;color:${b > 0 ? 'var(--accent3)' : b < 0 ? 'var(--accent2)' : 'var(--muted)'}">
          [${b > 0 ? '+' + fmt(b) : fmt(b)}]
        </span></div>
        ${statusHTML}
      </div>`;
  });

  const resultsEl = document.getElementById('debt-results');
  if (resultsEl) {
    resultsEl.innerHTML = html || '<div class="empty">Không có dữ liệu</div>';
  }

  const box = document.getElementById('suggest-box');
  if (box) {
    if (transfers.length > 0) {
      box.style.display = 'block';
      box.innerHTML = `
        <div class="summary-box">
          <div class="summary-title">💡 Cần thanh toán</div>
          ${transfers.map(t => `
            <div class="transfer-row" style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
              <div>
                <strong>${t.from}</strong>
                <span class="arrow">→</span>
                <strong>${t.to}</strong>
              </div>
              <div style="display:flex; align-items:center; gap:10px; margin-left:auto;">
                <span class="amount-pos">${fmt(t.amount)}</span>
                <button class="btn btn-ghost show-qr-btn" data-to="${t.to}" style="padding: 4px 10px; font-size: 0.72rem; text-transform:none; font-family:sans-serif; letter-spacing:0.5px; border-radius:3px;">Xem QR</button>
              </div>
            </div>`).join('')}
        </div>`;

      // Gắn sự kiện click xem QR
      box.querySelectorAll('.show-qr-btn').forEach(btn => {
        btn.onclick = () => {
          const recipient = btn.getAttribute('data-to');
          showQRModal(recipient);
        };
      });
    } else {
      box.style.display = 'none';
    }
  }
}

export async function settleDebt() {
  const from = document.getElementById('settle-from').value;
  const to = document.getElementById('settle-to').value;
  const amount = parseFloat(document.getElementById('settle-amount').value) || 0;
  const purpose = document.getElementById('settle-purpose').value.trim();
  const billInput = document.getElementById('settle-bill');

  if (from === to) {
    showToast('Người trả và nhận phải khác nhau!', true);
    return;
  }

  if (!amount) {
    showToast('Nhập số tiền!', true);
    return;
  }

  let billImage = null;
  if (billInput && billInput.files && billInput.files[0]) {
    try {
      showToast('Đang nén ảnh bill thanh toán...');
      billImage = await compressImage(billInput.files[0], 800, 800, 0.7);
    } catch (err) {
      console.error("Lỗi nén ảnh bill:", err);
      showToast("Lỗi nén ảnh, giao dịch sẽ không lưu kèm ảnh bill!", true);
    }
  }

  const settleId = Date.now();

  state.db.settlements.push({
    id: settleId,
    date: new Date().toISOString(),
    from,
    to,
    amount,
    purpose,
    billImage
  });

  state.db.transactions.push({
    id: settleId,
    type: 'settle',
    date: new Date().toISOString(),
    amount,
    payer: from,
    purpose,
    details: `${from} trả ${to} ${fmt(amount)}${purpose ? ' — ' + purpose : ''}`,
    billImage
  });

  document.getElementById('settle-amount').value = '';
  document.getElementById('settle-purpose').value = '';
  if (billInput) billInput.value = '';

  showToast(`${from} đã trả ${to} ${fmt(amount)}`);
  auditEvent('settle', `${from} → ${to}: ${fmt(amount)}${purpose ? ' (' + purpose + ')' : ''}`);

  calcDebts();
  updateStats();

  // Gọi renderLog gián tiếp thông qua event bus hoặc main.js
  const event = new CustomEvent('dbUpdated');
  window.dispatchEvent(event);

  await saveDB(state.db);
}

export function updateStats() {
  const db = state.db;
  let total = 0, food = 0, card = 0;
  db.transactions.forEach(tx => {
    if (tx.type === 'food') {
      food += tx.amount;
      total += tx.amount;
    }
    if (tx.type === 'card') {
      card += tx.amount;
      total += tx.amount;
    }
  });

  const totalEl = document.getElementById('stat-total');
  const foodEl = document.getElementById('stat-food');
  const cardEl = document.getElementById('stat-card');
  const txnsEl = document.getElementById('stat-txns');

  if (totalEl) totalEl.textContent = fmt(total);
  if (foodEl) foodEl.textContent = fmt(food);
  if (cardEl) cardEl.textContent = fmt(card);
  if (txnsEl) txnsEl.textContent = db.transactions.length;
}

export function populateSettleSelects() {
  const populate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = PEOPLE.map(p => `<option value="${p}">${p}</option>`).join('');
    }
  };
  populate('settle-from');
  populate('settle-to');
}

export function showQRModal(recipient) {
  const modal = document.getElementById('qr-modal');
  const body = document.getElementById('qr-modal-body');
  const desc = document.getElementById('qr-modal-desc');
  const title = document.getElementById('qr-modal-title');
  if (!modal || !body) return;

  state.db.bankQRs = state.db.bankQRs || {};
  const qrData = state.db.bankQRs[recipient];

  title.textContent = `QR THANH TOÁN CỦA ${recipient.toUpperCase()}`;

  if (qrData) {
    body.innerHTML = `<img src="${qrData}" alt="QR ${recipient}" style="max-width:100%; max-height:280px; border-radius:4px; object-fit:contain;" />`;
    desc.textContent = `Vui lòng quét mã để chuyển khoản cho ${recipient}.`;
  } else {
    body.innerHTML = `<div class="empty" style="padding:20px; font-size:0.85rem;">${recipient} chưa cấu hình mã QR ngân hàng.</div>`;
    desc.textContent = `Vui lòng liên hệ ${recipient} thêm mã QR tại tab Tài Khoản.`;
  }

  modal.style.display = 'flex';
}
