import { setDoc } from "firebase/firestore";
import { SCORE_DOC } from "../firebase/config";
import { state } from "../utils/state";
import { showToast } from "../utils/helpers";
import { auditEvent } from "../auth/audit";

export async function saveScoreData() {
  try {
    await setDoc(SCORE_DOC, { players: state.scorePlayers, history: state.scoreHistory });
  } catch (e) {
    console.error('Lỗi khi lưu dữ liệu điểm:', e);
  }
}

export function renderScore() {
  const wrap = document.getElementById('score-players');
  if (!wrap) return;

  wrap.innerHTML = state.scorePlayers.map(p => `
    <div class="score-player" data-id="${p.id}">
      <input
        class="score-add"
        type="number"
        placeholder="+"
        enterkeyhint="done"
      />
      <input
        class="score-name"
        type="text"
        value="${p.name}"
      />
      <input
        class="score-total"
        type="number"
        value="${p.score}"
      />
    </div>
  `).join('');

  // Gắn event listeners cho các input
  wrap.querySelectorAll('.score-player').forEach(row => {
    const id = row.getAttribute('data-id');
    const addInput = row.querySelector('.score-add');
    const nameInput = row.querySelector('.score-name');
    const totalInput = row.querySelector('.score-total');

    // Thao tác xóa người chơi trong chế độ Delete
    row.onclick = (e) => {
      if (state.scoreDeleteMode && e.target !== addInput && e.target !== nameInput && e.target !== totalInput) {
        scoreDeletePlayer(id);
      }
    };

    addInput.onkeydown = (e) => {
      if (e.key === 'Enter') {
        addInput.blur();
      }
    };
    addInput.onblur = () => {
      scoreAdd(id, addInput);
    };

    nameInput.onchange = () => {
      scoreRename(id, nameInput.value);
    };

    totalInput.onchange = () => {
      scoreEdit(id, totalInput.value);
    };
  });

  renderScoreHistory();
}

export async function scoreAdd(id, input) {
  const val = parseInt(input.value);
  if (isNaN(val)) {
    input.value = '';
    return;
  }
  const p = state.scorePlayers.find(x => x.id === id);
  if (!p) return;
  p.score += val;
  state.scoreHistory.push({
    type: 'add',
    entryId: crypto.randomUUID(),
    id,
    value: val,
    date: Date.now()
  });
  auditEvent('score_add', `+${val} cho ${p.name}`);
  input.value = '';
  await saveScoreData();
  renderScore();
  
  // Đồng bộ sang danh sách người quay của random tab
  window.dispatchEvent(new CustomEvent('scoreUpdated'));
}

export async function scoreRename(id, name) {
  const p = state.scorePlayers.find(x => x.id === id);
  if (!p) return;
  p.name = name;
  await saveScoreData();
  window.dispatchEvent(new CustomEvent('scoreUpdated'));
}

export async function scoreEdit(id, value) {
  const p = state.scorePlayers.find(x => x.id === id);
  if (!p) return;
  const val = parseInt(value);
  if (isNaN(val)) return;
  p.score = val;
  await saveScoreData();
}

export async function scoreAddPlayer() {
  state.scorePlayers.push({ id: crypto.randomUUID(), name: 'New', score: 0 });
  await saveScoreData();
  renderScore();
  window.dispatchEvent(new CustomEvent('scoreUpdated'));
}

export function scoreToggleDelete() {
  state.scoreDeleteMode = !state.scoreDeleteMode;
  const btn = document.getElementById('score-delete-btn');
  if (btn) btn.style.opacity = state.scoreDeleteMode ? '1' : '0.6';
  renderScore();
}

export async function scoreDeletePlayer(id) {
  if (!state.scoreDeleteMode) return;
  if (!requirePassword()) return;
  if (!confirm('Xóa người này?')) return;
  state.scorePlayers = state.scorePlayers.filter(p => p.id !== id);
  state.scoreHistory = state.scoreHistory.filter(h => h.id !== id);
  await saveScoreData();
  renderScore();
  window.dispatchEvent(new CustomEvent('scoreUpdated'));
}

export function requirePassword() {
  const pw = prompt('Nhập mật khẩu tài khoản của bạn:');
  if (!state.currentUser || state.accounts[state.currentUser] !== pw) {
    showToast('Sai mật khẩu!', true);
    return false;
  }
  return true;
}

export async function scoreRemoveHistory(entryId) {
  const item = state.scoreHistory.find(h => h.entryId === entryId);
  if (!item) return;
  const alreadyUndone = state.scoreHistory.some(h => h.type === 'undo' && h.target === entryId);
  if (alreadyUndone) return;
  const p = state.scorePlayers.find(x => x.id === item.id);
  if (p) p.score -= item.value;
  state.scoreHistory.push({
    type: 'undo',
    target: entryId,
    id: item.id,
    value: item.value,
    date: Date.now()
  });
  await saveScoreData();
  renderScore();
  window.dispatchEvent(new CustomEvent('scoreUpdated'));
}

export function renderScoreHistory() {
  const h = document.getElementById('score-history');
  if (!h) return;

  const addEntries = state.scoreHistory.filter(item => item.type === 'add' || (!item.type));
  const deletedTargets = new Set(state.scoreHistory.filter(h => h.type === 'delete').map(h => h.target));
  const undoneTargets = new Set(state.scoreHistory.filter(h => h.type === 'undo').map(h => h.target));

  if (addEntries.length === 0) {
    h.innerHTML = '<div class="empty">Chưa có lịch sử</div>';
    return;
  }

  h.innerHTML = addEntries.slice().reverse().map((item) => {
    const p = state.scorePlayers.find(x => x.id === item.id);
    const isDeleted = deletedTargets.has(item.entryId);
    const isUndone = undoneTargets.has(item.entryId);

    let statusBadge = '';
    if (isDeleted) {
      statusBadge = '<span style="font-family:\'IBM Plex Mono\',monospace;font-size:0.65rem;color:var(--accent2);margin-left:6px;">DELETED</span>';
    } else if (isUndone) {
      statusBadge = '<span style="font-family:\'IBM Plex Mono\',monospace;font-size:0.65rem;color:var(--muted);margin-left:6px;">↩ UNDONE</span>';
    }

    const nameStyle = (isDeleted || isUndone) ? 'text-decoration:line-through;opacity:0.4;' : '';

    let actionBtn = `<span style="width:62px;display:inline-block;"></span>`;
    if (!isDeleted && !isUndone) {
      actionBtn = `<button class="btn btn-ghost score-undo-btn" style="font-size:0.7rem;padding:5px 10px;color:var(--muted);" data-entry-id="${item.entryId}">↩ Undo</button>`;
    }

    const date = item.date ? new Date(item.date).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) : '';

    return `
      <div class="score-history-item" style="${isDeleted || isUndone ? 'opacity:0.5;' : ''}">
        <div style="${nameStyle}">
          <strong>${p ? p.name : '?'}</strong>
          <span style="font-family:'IBM Plex Mono',monospace;color:var(--accent3);margin-left:4px;">+${item.value}</span>
          ${statusBadge}
          ${date ? `<span style="font-size:0.68rem;color:var(--muted);margin-left:8px;">${date}</span>` : ''}
        </div>
        ${actionBtn}
      </div>
    `;
  }).join('');

  // Gắn event click cho các nút Undo lịch sử điểm
  h.querySelectorAll('.score-undo-btn').forEach(btn => {
    btn.onclick = () => {
      const entryId = btn.getAttribute('data-entry-id');
      scoreRemoveHistory(entryId);
    };
  });
}

export async function scoreReset() {
  if (!requirePassword()) return;
  if (!confirm('Reset toàn bộ điểm và lịch sử?')) return;
  auditEvent('score_reset', 'Reset toàn bộ điểm và lịch sử');
  state.scorePlayers = [];
  state.scoreHistory = [];
  await saveScoreData();
  renderScore();
  window.dispatchEvent(new CustomEvent('scoreUpdated'));
}
