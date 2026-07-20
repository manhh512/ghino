import { PEOPLE, fmt, showToast } from "../utils/helpers";
import { state, saveDB } from "../utils/state";
import { auditEvent } from "../auth/audit";

export function renderFoodParticipants() {
  const grid = document.getElementById('food-participants');
  if (!grid) return;
  grid.innerHTML = PEOPLE.map(p => `
    <div class="person-chip ${state.foodSelected.includes(p) ? 'selected' : ''}"
         data-name="${p}">${p}</div>
  `).join('');

  // Gắn event listener
  grid.querySelectorAll('.person-chip').forEach(chip => {
    chip.onclick = () => {
      const name = chip.getAttribute('data-name');
      toggleFood(name, chip);
    };
  });
}

export function toggleFood(name, el) {
  if (state.foodSelected.includes(name)) {
    state.foodSelected = state.foodSelected.filter(x => x !== name);
    el.classList.remove('selected');
  } else {
    state.foodSelected.push(name);
    el.classList.add('selected');
  }
  calcFoodPreview();
}

export function calcFoodPreview() {
  const amountInput = document.getElementById('food-amount');
  const amount = amountInput ? parseFloat(amountInput.value) || 0 : 0;
  
  const previewEl = document.getElementById('food-preview');
  if (!previewEl) return;

  if (!amount || state.foodSelected.length === 0) {
    previewEl.style.display = 'none';
    return;
  }
  
  const share = Math.round(amount / state.foodSelected.length);
  const payer = document.getElementById('food-payer').value;
  const purpose = document.getElementById('food-purpose-custom').value.trim();
  
  let html = '';
  if (purpose) {
    html += `<div style="font-size:0.82rem;color:var(--accent3);font-family:'IBM Plex Mono',monospace;margin-bottom:10px;letter-spacing:0.5px;">${purpose}</div>`;
  }
  html += state.foodSelected.map(p => {
    const owes = p === payer ? 0 : share;
    return `<div class="debt-row"><span>${p}</span><span class="${owes > 0 ? 'amount-pos' : 'amount-zero'}">${owes > 0 ? '→ ' + fmt(owes) : '✔ đã trả'}</span></div>`;
  }).join('');
  
  const contentEl = document.getElementById('food-preview-content');
  if (contentEl) contentEl.innerHTML = html;
  previewEl.style.display = 'block';
}

export async function saveFood() {
  const amountInput = document.getElementById('food-amount');
  const amount = amountInput ? parseFloat(amountInput.value) || 0 : 0;

  if (!amount) {
    showToast('Nhập số tiền!', true);
    return;
  }
  if (state.foodSelected.length < 2) {
    showToast('Chọn ít nhất 2 người!', true);
    return;
  }
  const payer = document.getElementById('food-payer').value;
  const purpose = document.getElementById('food-purpose-custom').value.trim();
  const share = Math.round(amount / state.foodSelected.length);
  const purposeLabel = purpose ? purpose + ' — ' : '';

  state.db.transactions.push({
    id: Date.now(),
    type: 'food',
    date: new Date().toISOString(),
    amount,
    payer,
    purpose,
    participants: [...state.foodSelected],
    share,
    details: `${purposeLabel}Chia đều ${state.foodSelected.join(', ')} — ${fmt(share)}/người`
  });

  showToast('Đã chia tiền!');
  auditEvent('save_food', `${fmt(amount)} — ${payer} trả — ${state.foodSelected.join(', ')}`);
  
  resetFood();
  
  // Gọi đồng bộ giao diện qua CustomEvent
  window.dispatchEvent(new CustomEvent('dbUpdated'));

  await saveDB(state.db);
}

export function resetFood() {
  const amountInput = document.getElementById('food-amount');
  if (amountInput) amountInput.value = '';

  const purposeInput = document.getElementById('food-purpose-custom');
  if (purposeInput) purposeInput.value = '';

  state.foodSelected = [...PEOPLE];
  renderFoodParticipants();
  
  const previewEl = document.getElementById('food-preview');
  if (previewEl) previewEl.style.display = 'none';
}

export function populateFoodPayer() {
  const el = document.getElementById('food-payer');
  if (el) {
    el.innerHTML = PEOPLE.map(p => `<option value="${p}">${p}</option>`).join('');
  }
}
