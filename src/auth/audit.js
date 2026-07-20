import { getDoc, setDoc } from "firebase/firestore";
import { AUDIT_DOC } from "../firebase/config";
import { state } from "../utils/state";
import { ACCOUNT_LABELS } from "../utils/helpers";

export async function loadAudit() {
  try {
    const snap = await getDoc(AUDIT_DOC);
    if (snap.exists()) {
      state.auditLog = snap.data().log || [];
    }
  } catch (e) {
    state.auditLog = [];
  }
}

export async function saveAuditEntry(entry) {
  state.auditLog.push(entry);
  try {
    await setDoc(AUDIT_DOC, { log: state.auditLog });
  } catch (e) {
    console.error("Lỗi khi lưu audit log:", e);
  }
}

export function auditEvent(type, detail = '') {
  if (!state.currentUser) return;
  // Bỏ qua các hành động ghi điểm
  if (['score_add', 'score_undo', 'score_delete', 'score_reset'].includes(type)) return;
  const entry = {
    id: crypto.randomUUID(),
    user: state.currentUser,
    userLabel: ACCOUNT_LABELS[state.currentUser],
    type,
    detail,
    ts: Date.now(),
    date: new Date().toISOString()
  };
  saveAuditEntry(entry);
  return entry;
}

const AUDIT_TYPE_LABELS = {
  login: { icon: '🔑', label: 'Đăng nhập', color: '#4ae8a0' },
  login_fail: { icon: '❌', label: 'Đăng nhập thất bại', color: '#e84a4a' },
  logout: { icon: '🚪', label: 'Đăng xuất', color: '#888' },
  change_password: { icon: '🔒', label: 'Đổi mật khẩu', color: '#9a4ae8' },
  save_food: { icon: '💵', label: 'Lưu chia tiền', color: '#e8c84a' },
  save_card: { icon: '🃏', label: 'Lưu đánh bài', color: '#e89a4a' },
  settle: { icon: '✅', label: 'Thanh toán nợ', color: '#4a9ae8' },
  delete_tx: { icon: '🗑', label: 'Xóa giao dịch', color: '#e84a4a' },
};

export function renderAudit() {
  const filterUser = document.getElementById('audit-filter-user')?.value || '';
  const filterType = document.getElementById('audit-filter-type')?.value || '';

  let entries = [...state.auditLog].reverse();
  if (filterUser) entries = entries.filter(e => e.user === filterUser);
  if (filterType) entries = entries.filter(e => e.type === filterType);

  const countEl = document.getElementById('audit-count');
  if (countEl) {
    countEl.textContent = entries.length + ' sự kiện';
  }

  const listEl = document.getElementById('audit-list');
  if (!listEl) return;

  if (entries.length === 0) {
    listEl.innerHTML = '<div class="empty">Không có dữ liệu</div>';
    return;
  }

  listEl.innerHTML = entries.map(e => {
    const meta = AUDIT_TYPE_LABELS[e.type] || { icon: '•', label: e.type, color: '#888' };
    const dt = new Date(e.ts);
    const timeStr = dt.toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return `
      <div style="display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid #1e1e1e;">
        <div style="font-size:1.1rem;margin-top:1px;flex-shrink:0;">${meta.icon}</div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span style="font-family:'IBM Plex Mono',monospace;font-size:0.8rem;font-weight:700;color:${meta.color};">${meta.label}</span>
            <span style="font-family:'IBM Plex Mono',monospace;font-size:0.72rem;background:#222;border-radius:3px;padding:2px 7px;color:#ccc;">${e.userLabel || e.user}</span>
          </div>
          ${e.detail ? `<div style="font-family:'IBM Plex Sans',sans-serif;font-size:0.78rem;color:#888;margin-top:3px;">${e.detail}</div>` : ''}
          <div style="font-family:'IBM Plex Mono',monospace;font-size:0.65rem;color:#444;margin-top:4px;letter-spacing:0.5px;">${timeStr}</div>
        </div>
      </div>`;
  }).join('');
}
