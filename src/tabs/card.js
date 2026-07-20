import { PEOPLE, fmt, showToast } from "../utils/helpers";
import { state, saveDB } from "../utils/state";
import { auditEvent } from "../auth/audit";

export function setCardMode(mode) {
  state.cardMode = mode;
  const mode532Btn = document.getElementById('mode-532');
  const mode4321Btn = document.getElementById('mode-4321');
  const slots532Div = document.getElementById('card-slots-532');
  const slots4321Div = document.getElementById('card-slots-4321');

  if (mode532Btn) mode532Btn.classList.toggle('active', mode === '532');
  if (mode4321Btn) mode4321Btn.classList.toggle('active', mode === '4321');
  if (slots532Div) slots532Div.style.display = mode === '532' ? '' : 'none';
  if (slots4321Div) slots4321Div.style.display = mode === '4321' ? '' : 'none';

  // Reset selections
  Object.keys(state.cardSlotSelection).forEach(k => state.cardSlotSelection[k] = []);
  renderCardSlots();

  const previewEl = document.getElementById('card-preview');
  if (previewEl) previewEl.style.display = 'none';
}

export function renderCardSlots() {
  const slots532 = [
    { id: 'slot-50', key: '50', cls: 'p50' },
    { id: 'slot-30', key: '30', cls: 'p30' },
    { id: 'slot-20', key: '20', cls: 'p20' },
  ];
  const slots4321 = [
    { id: 'slot-40', key: '40', cls: 'p40' },
    { id: 'slot-30b', key: '30b', cls: 'p30' },
    { id: 'slot-20b', key: '20b', cls: 'p20' },
    { id: 'slot-10', key: '10', cls: 'p10' },
  ];

  const slots = state.cardMode === '532' ? slots532 : slots4321;
  slots.forEach(s => {
    const el = document.getElementById(s.id);
    if (!el) return;
    el.innerHTML = PEOPLE.map(p => `
      <div class="person-chip ${state.cardSlotSelection[s.key]?.includes(p) ? s.cls : ''}"
           data-name="${p}">${p}</div>
    `).join('');

    // Gắn event listener
    el.querySelectorAll('.person-chip').forEach(chip => {
      chip.onclick = () => {
        const name = chip.getAttribute('data-name');
        toggleCardSlot(name, s.key, s.cls);
      };
    });
  });
}

export function toggleCardSlot(name, key, cls) {
  const keys532 = ['50', '30', '20'];
  const keys4321 = ['40', '30b', '20b', '10'];
  const allKeys = state.cardMode === '532' ? keys532 : keys4321;

  // Xóa tên khỏi tất cả các slot trước
  allKeys.forEach(k => {
    state.cardSlotSelection[k] = state.cardSlotSelection[k].filter(x => x !== name);
  });

  // Thêm vào slot này
  state.cardSlotSelection[key].push(name);
  
  // Render lại để cập nhật giao diện
  renderCardSlots();
  calcCardPreview();
}

export function calcCardPreview() {
  const amountInput = document.getElementById('card-amount');
  const amount = amountInput ? parseFloat(amountInput.value) || 0 : 0;

  const previewEl = document.getElementById('card-preview');
  if (!previewEl) return;

  if (!amount) {
    previewEl.style.display = 'none';
    return;
  }
  const payer = document.getElementById('card-payer').value;
  let rows = '';

  if (state.cardMode === '532') {
    const slots = [
      { key: '50', pct: 0.5, label: '50%' },
      { key: '30', pct: 0.3, label: '30%' },
      { key: '20', pct: 0.2, label: '20%' },
    ];
    slots.forEach(s => {
      state.cardSlotSelection[s.key].forEach(p => {
        const owe = Math.round(amount * s.pct);
        rows += `<div class="debt-row"><span>${p} <small style="color:var(--muted)">(${s.label})</small></span><span class="${p === payer ? 'amount-zero' : 'amount-pos'}">${p === payer ? '✔ đã trả' : fmt(owe)}</span></div>`;
      });
    });
  } else {
    const slots = [
      { key: '40', pct: 0.4, label: '40%' },
      { key: '30b', pct: 0.3, label: '30%' },
      { key: '20b', pct: 0.2, label: '20%' },
      { key: '10', pct: 0.1, label: '10%' },
    ];
    slots.forEach(s => {
      state.cardSlotSelection[s.key].forEach(p => {
        const owe = Math.round(amount * s.pct);
        rows += `<div class="debt-row"><span>${p} <small style="color:var(--muted)">(${s.label})</small></span><span class="${p === payer ? 'amount-zero' : 'amount-pos'}">${p === payer ? '✔ đã trả' : fmt(owe)}</span></div>`;
      });
    });
  }

  if (!rows) {
    rows = '<div class="empty" style="padding:10px">Chọn người cho từng mức</div>';
  }

  const contentEl = document.getElementById('card-preview-content');
  if (contentEl) contentEl.innerHTML = rows;
  previewEl.style.display = 'block';
}

export async function saveCard() {
  const amountInput = document.getElementById('card-amount');
  const amount = amountInput ? parseFloat(amountInput.value) || 0 : 0;

  if (!amount) {
    showToast('Nhập số tiền!', true);
    return;
  }
  const payer = document.getElementById('card-payer').value;
  let breakdown = [];

  if (state.cardMode === '532') {
    [['50', 0.5], ['30', 0.3], ['20', 0.2]].forEach(([k, pct]) => {
      state.cardSlotSelection[k].forEach(p => breakdown.push({ person: p, pct, amount: Math.round(amount * pct) }));
    });
  } else {
    [['40', 0.4], ['30b', 0.3], ['20b', 0.2], ['10', 0.1]].forEach(([k, pct]) => {
      state.cardSlotSelection[k].forEach(p => breakdown.push({ person: p, pct, amount: Math.round(amount * pct) }));
    });
  }

  if (breakdown.length === 0) {
    showToast('Chọn người chơi!', true);
    return;
  }

  state.db.transactions.push({
    id: Date.now(),
    type: 'card',
    date: new Date().toISOString(),
    amount,
    payer,
    mode: state.cardMode,
    breakdown,
    details: breakdown.map(b => `${b.person}:${Math.round(b.pct * 100)}%`).join(', ')
  });

  showToast('Đã lưu đánh bài!');
  auditEvent('save_card', `${fmt(amount)} — ${payer} trả — ${breakdown.map(b => b.person + ':' + Math.round(b.pct * 100) + '%').join(', ')}`);
  
  resetCard();

  window.dispatchEvent(new CustomEvent('dbUpdated'));

  await saveDB(state.db);
}

export function resetCard() {
  const amountInput = document.getElementById('card-amount');
  if (amountInput) amountInput.value = '';

  Object.keys(state.cardSlotSelection).forEach(k => state.cardSlotSelection[k] = []);
  renderCardSlots();

  const previewEl = document.getElementById('card-preview');
  if (previewEl) previewEl.style.display = 'none';
}

export function populateCardPayer() {
  const el = document.getElementById('card-payer');
  if (el) {
    el.innerHTML = PEOPLE.map(p => `<option value="${p}">${p}</option>`).join('');
  }
}
