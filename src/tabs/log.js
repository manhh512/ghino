import { PEOPLE, fmt, showToast } from "../utils/helpers";
import { state, saveDB } from "../utils/state";
import { auditEvent } from "../auth/audit";
import { calcDebts, updateStats } from "./home";

export function renderLog() {
  const db = state.db;
  let txns = [...db.transactions];

  // LẤY GIÁ TRỊ BỘ LỌC (NEW FEATURE)
  const keyword = document.getElementById('log-filter-keyword')?.value.toLowerCase().trim() || '';
  const type = document.getElementById('log-filter-type')?.value || '';
  const payer = document.getElementById('log-filter-payer')?.value || '';
  const startDateVal = document.getElementById('log-filter-start-date')?.value || '';
  const endDateVal = document.getElementById('log-filter-end-date')?.value || '';

  // Áp dụng bộ lọc
  if (keyword) {
    txns = txns.filter(tx => 
      (tx.details && tx.details.toLowerCase().includes(keyword)) ||
      (tx.purpose && tx.purpose.toLowerCase().includes(keyword)) ||
      (tx.payer && tx.payer.toLowerCase().includes(keyword))
    );
  }
  if (type) {
    txns = txns.filter(tx => tx.type === type);
  }
  if (payer) {
    txns = txns.filter(tx => tx.payer === payer);
  }
  if (startDateVal) {
    const start = new Date(startDateVal);
    start.setHours(0, 0, 0, 0);
    txns = txns.filter(tx => new Date(tx.date) >= start);
  }
  if (endDateVal) {
    const end = new Date(endDateVal);
    end.setHours(23, 59, 59, 999);
    txns = txns.filter(tx => new Date(tx.date) <= end);
  }

  // Đảo ngược danh sách hiển thị
  txns.reverse();

  const countEl = document.getElementById('log-count');
  if (countEl) {
    countEl.textContent = txns.length + ' bản ghi';
  }

  const wrapEl = document.getElementById('log-table-wrap');
  if (!wrapEl) return;

  if (txns.length === 0) {
    wrapEl.innerHTML = '<div class="empty">Không tìm thấy giao dịch nào phù hợp</div>';
    return;
  }

  const rows = txns.map(tx => {
    const d = new Date(tx.date);
    const dateStr = d.toLocaleString('vi-VN');
    const tagCls = tx.type === 'food' ? 'tag-food' : tx.type === 'card' ? 'tag-card' : 'tag-settle';
    const tagLabel = tx.type === 'food' ? '💵 Chia tiền' : tx.type === 'card' ? '🃏 Bài' : '💸 Trả';
    const imgHtml = tx.billImage 
      ? `<div class="bill-thumbnail" style="margin-top:6px; cursor:pointer;" data-bill="${tx.billImage}"><img src="${tx.billImage}" alt="Bill" style="max-width:80px; max-height:60px; border-radius:4px; border:1px solid var(--border);" /></div>`
      : '';
    return `<tr>
      <td style="color:var(--muted);font-size:0.78rem;font-family:'IBM Plex Mono',monospace;white-space:nowrap">${dateStr}</td>
      <td><span class="tag ${tagCls}">${tagLabel}</span></td>
      <td style="font-family:'IBM Plex Mono',monospace;font-weight:600;color:var(--accent)">${fmt(tx.amount)}</td>
      <td style="font-size:0.8rem;color:var(--muted)">
        <div>${tx.details || ''}</div>
        ${imgHtml}
      </td>
      <td><button class="btn btn-danger delete-tx-btn" data-id="${tx.id}">✕</button></td>
    </tr>`;
  }).join('');

  wrapEl.innerHTML = `
    <table class="log-table">
      <thead><tr>
        <th>Ngày</th><th>Loại</th><th>Số tiền</th><th>Chi tiết</th><th></th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>`;

  // Gắn event listeners cho các nút xóa
  wrapEl.querySelectorAll('.delete-tx-btn').forEach(btn => {
    btn.onclick = () => {
      const id = parseInt(btn.getAttribute('data-id'));
      deleteLog(id);
    };
  });

  // Gắn event click xem bill phóng to
  wrapEl.querySelectorAll('.bill-thumbnail').forEach(thumb => {
    thumb.onclick = () => {
      const billData = thumb.getAttribute('data-bill');
      showLightbox(billData);
    };
  });
}

export function showLightbox(imgSrc) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  if (!modal || !img) return;
  img.src = imgSrc;
  modal.style.display = 'flex';
}

export async function deleteLog(id) {
  if (!confirm('Xóa giao dịch này?')) return;

  const tx = state.db.transactions.find(t => t.id === id);
  auditEvent('delete_tx', tx ? `${tx.type} — ${fmt(tx.amount)} — ${tx.details || ''}` : `id:${id}`);

  // Hủy settlement cũ + mới
  if (tx && tx.type === 'settle') {
    state.db.settlements = state.db.settlements.filter(s => {
      // Dữ liệu mới
      if (s.id === id) return false;

      // Dữ liệu cũ (tương thích ngược)
      if (
        s.from === tx.payer &&
        s.amount === tx.amount
      ) return false;

      return true;
    });
  }

  state.db.transactions = state.db.transactions.filter(t => t.id !== id);

  renderLog();
  calcDebts();
  updateStats();

  await saveDB(state.db);
}

export async function clearLog() {
  if (!confirm('Xóa TOÀN BỘ lịch sử? Không thể hoàn tác!')) return;
  state.db = { transactions: [], settlements: [] };
  
  renderLog();
  calcDebts();
  updateStats();
  
  await saveDB(state.db);
}

export function populateLogFilterPayer() {
  const el = document.getElementById('log-filter-payer');
  if (el) {
    el.innerHTML = '<option value="">Tất cả người trả</option>' + 
      PEOPLE.map(p => `<option value="${p}">${p}</option>`).join('');
  }
}

export function resetLogFilters() {
  const keyword = document.getElementById('log-filter-keyword');
  const type = document.getElementById('log-filter-type');
  const payer = document.getElementById('log-filter-payer');
  const start = document.getElementById('log-filter-start-date');
  const end = document.getElementById('log-filter-end-date');

  if (keyword) keyword.value = '';
  if (type) type.value = '';
  if (payer) payer.value = '';
  if (start) start.value = '';
  if (end) end.value = '';

  renderLog();
}
