import { state } from "../utils/state";
import { showToast } from "../utils/helpers";

export function renderRandomList() {
  const wrap = document.getElementById('random-list');
  if (!wrap) return;

  wrap.innerHTML = state.randomPlayers.map((p, index) => `
    <div class="random-row" data-index="${index}">
      <input
        type="text"
        value="${p}"
        class="random-name-input"
      />
      <div class="random-percent">
        🎲
      </div>
      <button class="btn btn-danger delete-random-btn">
        X
      </button>
    </div>
  `).join('');

  // Gắn event listeners cho các phần tử
  wrap.querySelectorAll('.random-row').forEach(row => {
    const idx = parseInt(row.getAttribute('data-index'));
    const input = row.querySelector('.random-name-input');
    const deleteBtn = row.querySelector('.delete-random-btn');

    input.onchange = () => {
      updateRandomName(idx, input.value);
    };

    deleteBtn.onclick = () => {
      removeRandomPerson(idx);
    };
  });

  drawWheel();
}

export function addRandomPerson() {
  state.randomPlayers.push('New');
  renderRandomList();
}

export function removeRandomPerson(index) {
  state.randomPlayers.splice(index, 1);
  renderRandomList();
}

export function updateRandomName(index, value) {
  state.randomPlayers[index] = value;
  renderRandomList();
}

export function calculateWeights() {
  const weights = {};
  if (state.randomPlayers.length === 0) return weights;

  const equalChance = 100 / state.randomPlayers.length;
  state.randomPlayers.forEach(p => {
    weights[p] = equalChance;
  });

  return weights;
}

export function drawWheel() {
  const canvas = document.getElementById('wheel');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const size = canvas.width;
  const center = size / 2;
  const radius = center - 8;

  ctx.clearRect(0, 0, size, size);

  const colors = [
    '#e84a4a',
    '#4ae8a0',
    '#e8c84a',
    '#9a4ae8',
    '#4a9ae8',
    '#e89a4a',
    '#ff6b81',
    '#2ed573'
  ];

  const total = state.randomPlayers.length;
  if (total === 0) return;

  const sliceAngle = (Math.PI * 2) / total;

  for (let i = 0; i < total; i++) {
    const startAngle = (-Math.PI / 2) + (i * sliceAngle);
    const endAngle = startAngle + sliceAngle;
    const midAngle = startAngle + (sliceAngle / 2);

    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, startAngle, endAngle);
    ctx.closePath();

    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();

    ctx.strokeStyle = '#111';
    ctx.lineWidth = 3;
    ctx.stroke();

    // DRAW TEXT
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(midAngle);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    ctx.fillText(
      state.randomPlayers[i],
      radius * 0.45,
      0
    );

    ctx.restore();
  }
}

export function weightedPick(weights) {
  const rand = Math.random() * 100;
  let cumulative = 0;

  for (const name in weights) {
    cumulative += weights[name];
    if (rand <= cumulative) {
      return name;
    }
  }

  return Object.keys(weights)[0];
}

export function spinWheel() {
  if (state.randomPlayers.length === 0) return;

  const weights = calculateWeights();
  const winner = weightedPick(weights);
  const canvas = document.getElementById('wheel');
  if (!canvas) return;

  const winnerIndex = state.randomPlayers.indexOf(winner);
  const slice = 360 / state.randomPlayers.length;

  const randomOffset = (Math.random() * 0.8 + 0.1) * slice;
  const neededRotation = 360 - (winnerIndex * slice) - randomOffset;

  const baseRotation = Math.floor(state.currentRotation / 360) * 360;
  const extraSpin = 360 * 5;

  state.currentRotation = baseRotation + extraSpin + neededRotation;
  canvas.style.transform = `rotate(${state.currentRotation}deg)`;

  setTimeout(() => {
    const resultEl = document.getElementById('random-result');
    if (resultEl) resultEl.innerHTML = `🎉 ${winner}`;
    showToast(`Random ra: ${winner}`);
  }, 5200);
}

export function syncRandomPlayersFromScore() {
  state.randomPlayers = state.scorePlayers.map(p => p.name);
  renderRandomList();
}
