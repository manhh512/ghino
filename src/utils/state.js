import { setDoc } from "firebase/firestore";
import { DB_DOC } from "../firebase/config";
import { PEOPLE } from "./helpers";

export const state = {
  db: { transactions: [], settlements: [] },
  dbReady: false,
  currentUser: null,
  auditLog: [],
  scorePlayers: [
    { id: crypto.randomUUID(), name: 'Hùng', score: 0 },
    { id: crypto.randomUUID(), name: 'Duy', score: 0 },
    { id: crypto.randomUUID(), name: 'Mạnh', score: 0 },
    { id: crypto.randomUUID(), name: 'Tú', score: 0 },
  ],
  scoreHistory: [],
  accounts: { manh: '123', hung: '123', tu: '123', duy: '123', tram: '123' },
  cardMode: '532',
  cardSlotSelection: { 50: [], 30: [], 20: [], 40: [], '30b': [], '20b': [], 10: [] },
  foodSelected: [...PEOPLE],
  foodPurpose: '',
  randomPlayers: ['Tú', 'Mạnh', 'Hùng', 'Duy', 'Trâm'],
  currentRotation: 0,
};

export function showStatus(msg, ok = true) {
  const s = document.getElementById('sync-status');
  if (!s) return;
  s.textContent = msg;
  s.style.color = ok ? 'var(--accent3)' : 'var(--accent2)';
}

export async function saveDB(data) {
  state.db = data;
  try {
    await setDoc(DB_DOC, data);
    showStatus('✔ Đã lưu');
  } catch (e) {
    showStatus('✘ Lỗi lưu: ' + e.message, false);
  }
}
