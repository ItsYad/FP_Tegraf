const BOARD_SIZE = 8;
let board = [];
let isRunning = false;
let animationSpeed = 100;

const moves = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

function initBoard() {
  const boardElement = document.getElementById("board");
  boardElement.innerHTML = "";
  boardElement.style.gridTemplateColumns = `repeat(${BOARD_SIZE}, 60px)`;

  board = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(-1));

  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      const sq = document.createElement("div");
      sq.className = `square ${(i + j) % 2 === 0 ? "light" : "dark"}`;
      sq.id = `sq-${i}-${j}`;
      sq.onclick = () => setStart(i, j);
      boardElement.appendChild(sq);
    }
  }
}

function setStart(r, c) {
  if (!isRunning) {
    document.getElementById("startRow").value = r;
    document.getElementById("startCol").value = c;
  }
}

function isValid(x, y) {
  return (
    x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE && board[x][y] === -1
  );
}

function countOnward(x, y) {
  return moves.filter((m) => isValid(x + m[0], y + m[1])).length;
}

function updateBoard(x, y, step) {
  const sq = document.getElementById(`sq-${x}-${y}`);
  sq.textContent = step;
  sq.classList.add(step === 1 ? "start" : "path", "current");
  setTimeout(() => sq.classList.remove("current"), animationSpeed);
}

async function solveKnightTour(x, y, step, mode) {
  board[x][y] = step;
  updateBoard(x, y, step);
  await new Promise((r) => setTimeout(r, animationSpeed));

  if (step === BOARD_SIZE * BOARD_SIZE) {
    document.getElementById("info").innerHTML = `<p class="success">✅ ${
      mode === "open" ? "Open" : "Closed"
    } Tour Berhasil!</p>`;
    return true;
  }

  let next = moves
    .map((m) => ({ x: x + m[0], y: y + m[1] }))
    .filter((p) => isValid(p.x, p.y))
    .map((p) => ({ ...p, c: countOnward(p.x, p.y) }))
    .sort((a, b) => a.c - b.c);

  for (let n of next) {
    if (await solveKnightTour(n.x, n.y, step + 1, mode)) return true;
  }

  board[x][y] = -1;
  return false;
}

async function solveTour() {
  if (isRunning) return;

  const r = +startRow.value;
  const c = +startCol.value;
  const mode = document.getElementById("mode").value;

  isRunning = true;
  initBoard();

  document.getElementById(
    "info"
  ).innerHTML = `<p>🔄 Menjalankan ${mode} tour...</p>`;

  await solveKnightTour(r, c, 1, mode);
  isRunning = false;
}

speed.addEventListener("input", (e) => {
  animationSpeed = +e.target.value;
  speedValue.textContent = animationSpeed + "ms";
});

initBoard();
