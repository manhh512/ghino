import { onSnapshot, getDoc } from "firebase/firestore";
import { DB_DOC, SCORE_DOC } from "./firebase/config";
import { state, showStatus } from "./utils/state";
import { restoreSession, doLogin, doLogout, changePassword, selectLoginUser, loadPasswords } from "./auth/auth";
import { loadAudit, renderAudit } from "./auth/audit";
import { calcDebts, updateStats, settleDebt, populateSettleSelects } from "./tabs/home";
import { renderFoodParticipants, saveFood, resetFood, populateFoodPayer, calcFoodPreview } from "./tabs/food";
import { renderCardSlots, saveCard, resetCard, populateCardPayer, setCardMode, calcCardPreview } from "./tabs/card";
import { renderScore, scoreAddPlayer, scoreToggleDelete, scoreReset } from "./tabs/score";
import { renderRandomList, addRandomPerson, spinWheel, syncRandomPlayersFromScore } from "./tabs/random";
import { renderLog, clearLog, populateLogFilterPayer, resetLogFilters } from "./tabs/log";
import { renderQRTab } from "./tabs/qr";

// Switch tab logic
function switchTab(tab, el) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  
  const panel = document.getElementById('tab-' + tab);
  if (panel) panel.classList.add('active');
  if (el) el.classList.add('active');

  if (tab === 'home') {
    calcDebts();
    updateStats();
  }
  if (tab === 'log') {
    renderLog();
  }
  if (tab === 'audit') {
    renderAudit();
  }
  if (tab === 'qr') {
    renderQRTab();
  }
}

// Initialize application
async function initApp() {
  // 1. Date display
  const now = new Date();
  const dateDisplay = document.getElementById('date-display');
  if (dateDisplay) {
    dateDisplay.textContent = now.toLocaleDateString('vi-VN', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).toUpperCase();
  }

  // 2. Load audit logs
  await loadAudit();

  // 3. Load passwords and session
  await loadPasswords();
  restoreSession();

  // 4. Populate drop-down selects
  populateFoodPayer();
  populateCardPayer();
  populateSettleSelects();
  populateLogFilterPayer();

  // 5. Initial renders
  renderFoodParticipants();
  renderCardSlots();
  renderScore();
  renderRandomList();
  renderQRTab();

  // 6. Connect to Firestore DB and listen for updates
  showStatus('⟳ Đang kết nối...', true);

  try {
    // Initial fetch for main transactions and settlements
    const snap = await getDoc(DB_DOC);
    if (snap.exists()) {
      state.db = snap.data();
    }
    showStatus('✔ Đã kết nối');
    state.dbReady = true;

    // Trigger initial renders
    renderLog();
    calcDebts();
    updateStats();
    renderQRTab();

    // Listen for realtime database changes (main db)
    onSnapshot(DB_DOC, (s) => {
      if (s.exists()) {
        state.db = s.data();
        renderLog();
        calcDebts();
        updateStats();
        renderQRTab();
        showStatus('🔄 Đồng bộ xong');
      }
    });

    // Listen for realtime scoreboard changes
    onSnapshot(SCORE_DOC, (s) => {
      if (s.exists()) {
        const data = s.data();
        state.scorePlayers = data.players || [];
        state.scoreHistory = data.history || [];
        renderScore();
        syncRandomPlayersFromScore();
      }
    });

  } catch (e) {
    showStatus('✘ Không kết nối được: ' + e.message, false);
    state.dbReady = true;
    renderLog();
    calcDebts();
    updateStats();
  }

  // 7. Bind Event Listeners
  setupEventListeners();
}

// Chạy khởi tạo ứng dụng ngay lập tức hoặc khi DOM sẵn sàng
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Helper for binding DOM event listeners cleanly
function setupEventListeners() {
  // Tabs switching
  const tabsContainer = document.getElementById('app-tabs');
  if (tabsContainer) {
    tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
      btn.onclick = (e) => {
        const tabName = btn.getAttribute('data-tab');
        switchTab(tabName, btn);
      };
    });
  }

  // Login event handlers
  const userChipsContainer = document.getElementById('login-user-chips');
  if (userChipsContainer) {
    userChipsContainer.querySelectorAll('.login-chip').forEach(chip => {
      chip.onclick = () => {
        const user = chip.getAttribute('data-user');
        selectLoginUser(user);
      };
    });
  }

  const passwordInput = document.getElementById('login-password');
  if (passwordInput) {
    passwordInput.onkeydown = (e) => {
      if (e.key === 'Enter') doLogin();
    };
  }

  const loginSubmitBtn = document.getElementById('login-submit-btn');
  if (loginSubmitBtn) {
    loginSubmitBtn.onclick = () => doLogin();
  }

  // Header options
  const changePasswordBtn = document.getElementById('change-password-btn');
  if (changePasswordBtn) {
    changePasswordBtn.onclick = () => changePassword();
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.onclick = () => doLogout();
  }

  // Settle Debt Form
  const settleBtn = document.getElementById('settle-btn');
  if (settleBtn) {
    settleBtn.onclick = () => settleDebt();
  }

  // Split Food Bill
  const foodAmountInput = document.getElementById('food-amount');
  if (foodAmountInput) {
    foodAmountInput.oninput = () => calcFoodPreview();
  }

  const foodPayerSelect = document.getElementById('food-payer');
  if (foodPayerSelect) {
    foodPayerSelect.onchange = () => calcFoodPreview();
  }

  const foodPurposeInput = document.getElementById('food-purpose-custom');
  if (foodPurposeInput) {
    foodPurposeInput.oninput = () => calcFoodPreview();
  }

  const foodResetBtn = document.getElementById('food-reset-btn');
  if (foodResetBtn) {
    foodResetBtn.onclick = () => resetFood();
  }

  const foodSaveBtn = document.getElementById('food-save-btn');
  if (foodSaveBtn) {
    foodSaveBtn.onclick = () => saveFood();
  }

  // Card Game Split
  const cardAmountInput = document.getElementById('card-amount');
  if (cardAmountInput) {
    cardAmountInput.oninput = () => calcCardPreview();
  }

  const cardPayerSelect = document.getElementById('card-payer');
  if (cardPayerSelect) {
    cardPayerSelect.onchange = () => calcCardPreview();
  }

  const cardResetBtn = document.getElementById('card-reset-btn');
  if (cardResetBtn) {
    cardResetBtn.onclick = () => resetCard();
  }

  const cardSaveBtn = document.getElementById('card-save-btn');
  if (cardSaveBtn) {
    cardSaveBtn.onclick = () => saveCard();
  }

  const mode532Btn = document.getElementById('mode-532');
  if (mode532Btn) {
    mode532Btn.onclick = () => setCardMode('532');
  }

  const mode4321Btn = document.getElementById('mode-4321');
  if (mode4321Btn) {
    mode4321Btn.onclick = () => setCardMode('4321');
  }

  // Score board
  const scoreAddPlayerBtn = document.getElementById('score-add-player-btn');
  if (scoreAddPlayerBtn) {
    scoreAddPlayerBtn.onclick = () => scoreAddPlayer();
  }

  const scoreDeleteBtn = document.getElementById('score-delete-btn');
  if (scoreDeleteBtn) {
    scoreDeleteBtn.onclick = () => scoreToggleDelete();
  }

  const scoreResetBtn = document.getElementById('score-reset-btn');
  if (scoreResetBtn) {
    scoreResetBtn.onclick = () => scoreReset();
  }

  // Random Wheel
  const spinWheelBtn = document.getElementById('spin-wheel-btn');
  if (spinWheelBtn) {
    spinWheelBtn.onclick = () => spinWheel();
  }

  const addRandomPersonBtn = document.getElementById('add-random-person-btn');
  if (addRandomPersonBtn) {
    addRandomPersonBtn.onclick = () => addRandomPerson();
  }

  // Transaction Log Filter (NEW FEATURE)
  const logFilterKeyword = document.getElementById('log-filter-keyword');
  if (logFilterKeyword) {
    logFilterKeyword.oninput = () => renderLog();
  }

  const logFilterType = document.getElementById('log-filter-type');
  if (logFilterType) {
    logFilterType.onchange = () => renderLog();
  }

  const logFilterPayer = document.getElementById('log-filter-payer');
  if (logFilterPayer) {
    logFilterPayer.onchange = () => renderLog();
  }

  const logFilterStart = document.getElementById('log-filter-start-date');
  if (logFilterStart) {
    logFilterStart.onchange = () => renderLog();
  }

  const logFilterEnd = document.getElementById('log-filter-end-date');
  if (logFilterEnd) {
    logFilterEnd.onchange = () => renderLog();
  }

  const logFilterResetBtn = document.getElementById('log-filter-reset-btn');
  if (logFilterResetBtn) {
    logFilterResetBtn.onclick = () => resetLogFilters();
  }

  const clearAllLogsBtn = document.getElementById('clear-all-logs-btn');
  if (clearAllLogsBtn) {
    clearAllLogsBtn.onclick = () => clearLog();
  }

  // Audit Filter
  const auditFilterUser = document.getElementById('audit-filter-user');
  if (auditFilterUser) {
    auditFilterUser.onchange = () => renderAudit();
  }

  const auditFilterType = document.getElementById('audit-filter-type');
  if (auditFilterType) {
    auditFilterType.onchange = () => renderAudit();
  }

  // Modals closing events (NEW FEATURE)
  const closeQRModalBtn = document.getElementById('close-qr-modal');
  const qrModal = document.getElementById('qr-modal');
  if (closeQRModalBtn && qrModal) {
    closeQRModalBtn.onclick = () => {
      qrModal.style.display = 'none';
    };
    qrModal.onclick = (e) => {
      if (e.target === qrModal) {
        qrModal.style.display = 'none';
      }
    };
  }

  const closeLightboxBtn = document.getElementById('close-lightbox');
  const lightboxModal = document.getElementById('lightbox-modal');
  if (closeLightboxBtn && lightboxModal) {
    closeLightboxBtn.onclick = () => {
      lightboxModal.style.display = 'none';
    };
    lightboxModal.onclick = (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.style.display = 'none';
      }
    };
  }
}

// Global Event Listeners
window.addEventListener('dbUpdated', () => {
  renderLog();
});

window.addEventListener('scoreUpdated', () => {
  syncRandomPlayersFromScore();
});
