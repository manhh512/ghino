import { getDoc, setDoc } from "firebase/firestore";
import { PASSWD_DOC } from "../firebase/config";
import { state } from "../utils/state";
import { ACCOUNT_LABELS, showToast } from "../utils/helpers";
import { auditEvent, saveAuditEntry } from "./audit";

export async function loadPasswords() {
  try {
    const snap = await getDoc(PASSWD_DOC);
    if (snap.exists()) {
      Object.assign(state.accounts, snap.data());
    }
  } catch (e) {
    console.error("Lỗi tải mật khẩu:", e);
  }
}

export async function savePasswords() {
  try {
    await setDoc(PASSWD_DOC, state.accounts);
  } catch (e) {
    console.error("Lỗi lưu mật khẩu:", e);
  }
}

export async function changePassword() {
  if (!state.currentUser) return;
  const oldPw = prompt('Mật khẩu hiện tại:');
  if (oldPw === null) return;
  if (state.accounts[state.currentUser] !== oldPw) {
    showToast('Sai mật khẩu hiện tại!', true);
    return;
  }
  const newPw = prompt('Mật khẩu mới (tối thiểu 2 ký tự):');
  if (!newPw || newPw.length < 2) {
    showToast('Mật khẩu quá ngắn!', true);
    return;
  }
  const confirmPw = prompt('Nhập lại mật khẩu mới:');
  if (newPw !== confirmPw) {
    showToast('Mật khẩu không khớp!', true);
    return;
  }
  state.accounts[state.currentUser] = newPw;
  await savePasswords();
  auditEvent('change_password', `${ACCOUNT_LABELS[state.currentUser]} đổi mật khẩu`);
  showToast('Đổi mật khẩu thành công!');
}

let _selectedLoginUser = '';

export function selectLoginUser(u) {
  _selectedLoginUser = u;
  document.querySelectorAll('.login-chip').forEach(c => {
    c.classList.toggle('active', c.getAttribute('data-user') === u);
  });
}

export async function doLogin() {
  const u = _selectedLoginUser;
  const pw = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');

  if (!u) {
    errEl.textContent = 'Vui lòng chọn tài khoản!';
    errEl.style.display = 'block';
    return;
  }
  if (!pw) {
    errEl.textContent = 'Vui lòng nhập mật khẩu!';
    errEl.style.display = 'block';
    return;
  }
  if (state.accounts[u] !== pw) {
    errEl.textContent = 'Sai mật khẩu!';
    errEl.style.display = 'block';
    document.getElementById('login-password').value = '';
    // Ghi nhận đăng nhập thất bại
    await saveAuditEntry({
      id: crypto.randomUUID(),
      user: u,
      userLabel: ACCOUNT_LABELS[u],
      type: 'login_fail',
      detail: 'Sai mật khẩu',
      ts: Date.now(),
      date: new Date().toISOString()
    });
    return;
  }

  state.currentUser = u;
  sessionStorage.setItem('ghino_user', u);

  // Ẩn overlay đăng nhập
  document.getElementById('login-overlay').style.display = 'none';
  document.getElementById('current-user-badge').style.display = 'flex';
  document.getElementById('current-user-name').textContent = ACCOUNT_LABELS[u].toUpperCase();

  // Ghi nhận đăng nhập thành công
  await saveAuditEntry({
    id: crypto.randomUUID(),
    user: u,
    userLabel: ACCOUNT_LABELS[u],
    type: 'login',
    detail: 'Đăng nhập thành công',
    ts: Date.now(),
    date: new Date().toISOString()
  });

  showToast('Xin chào ' + ACCOUNT_LABELS[u] + '!');
}

export async function doLogout() {
  if (!confirm('Đăng xuất?')) return;
  auditEvent('logout', 'Đăng xuất');
  await new Promise(r => setTimeout(r, 300));
  state.currentUser = null;
  sessionStorage.removeItem('ghino_user');
  document.getElementById('login-overlay').style.display = 'flex';
  document.getElementById('current-user-badge').style.display = 'none';
  document.getElementById('login-password').value = '';
  _selectedLoginUser = '';
  document.querySelectorAll('.login-chip').forEach(c => c.classList.remove('active'));
}

export function restoreSession() {
  const savedUser = sessionStorage.getItem('ghino_user');
  if (savedUser && state.accounts[savedUser]) {
    state.currentUser = savedUser;
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('current-user-badge').style.display = 'flex';
    document.getElementById('current-user-name').textContent = ACCOUNT_LABELS[savedUser].toUpperCase();
  }
}
