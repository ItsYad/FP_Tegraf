let sequence = [];
let lisResult = [];
let allLIS = [];

function parseInput() {
  const input = document.getElementById("sequenceInput").value;
  sequence = input
    .split(/[,\s]+/)
    .map((x) => parseInt(x.trim()))
    .filter((x) => !isNaN(x));
  return sequence;
}

function findAllLIS(arr) {
  const n = arr.length;
  if (n === 0) return [];

  const dp = Array(n).fill(1);
  const parent = Array(n)
    .fill(null)
    .map(() => []);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          parent[i] = [j];
        } else if (dp[j] + 1 === dp[i]) {
          parent[i].push(j);
        }
      }
    }
  }

  const maxLength = Math.max(...dp);
  const endIndices = [];

  for (let i = 0; i < n; i++) {
    if (dp[i] === maxLength) endIndices.push(i);
  }

  allLIS = [];

  function backtrack(index, current) {
    current.unshift(arr[index]);
    if (current.length === maxLength) {
      allLIS.push([...current]);
      current.shift();
      return;
    }
    for (let p of parent[index]) {
      backtrack(p, current);
    }
    current.shift();
  }

  for (let endIdx of endIndices) {
    backtrack(endIdx, []);
  }

  return allLIS[0] || [];
}

function drawTree(arr) {
  const svg = document.getElementById("treeSvg");
  svg.innerHTML = "";

  const width = Math.max(1000, arr.length * 100);
  const height = 600;
  const nodeRadius = 25;

  svg.setAttribute("width", width);
  svg.setAttribute("height", height);

  const root = { value: "∅", x: width / 2, y: 50, children: [] };
  const levelSpacing = width / (arr.length + 1);

  for (let i = 0; i < arr.length; i++) {
    root.children.push({
      value: arr[i],
      x: (i + 1) * levelSpacing,
      y: 150,
    });
  }

  function drawEdge(x1, y1, x2, y2) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "#999");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
  }

  function drawNode(x, y, value, highlight = false) {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", nodeRadius);
    circle.setAttribute("fill", highlight ? "#4CAF50" : "#667eea");
    circle.setAttribute("stroke", "#333");
    circle.setAttribute("stroke-width", "2");
    svg.appendChild(circle);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y + 5);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", "white");
    text.setAttribute("font-weight", "bold");
    text.textContent = value;
    svg.appendChild(text);
  }

  drawNode(root.x, root.y, root.value);

  root.children.forEach((child) => {
    drawEdge(root.x, root.y + nodeRadius, child.x, child.y - nodeRadius);
    drawNode(child.x, child.y, child.value, lisResult.includes(child.value));
  });
}

function displayResults() {
  const resultDiv = document.getElementById("resultSection");
  resultDiv.style.display = "block";

  let html = "<h3>📈 Hasil Analisis</h3>";

  html +=
    '<div class="result-item"><strong>Urutan Input:</strong><div class="sequence-display">';
  sequence.forEach((num) => (html += `<div class="number-box">${num}</div>`));
  html += "</div></div>";

  html +=
    '<div class="result-item"><strong>Longest Increasing Subsequence (LIS):</strong><div class="sequence-display">';
  lisResult.forEach(
    (num) => (html += `<div class="number-box highlight">${num}</div>`)
  );
  html += "</div></div>";

  html += `<div class="info-box">
                <p><strong>Panjang LIS:</strong> ${lisResult.length}</p>
                <p><strong>Subsequence:</strong> ${lisResult.join(" → ")}</p>
            </div>`;

  if (allLIS.length > 1) {
    html += `<div class="result-item"><strong>Ditemukan ${allLIS.length} LIS:</strong>`;
    allLIS.forEach((lis, i) => (html += `<p>${i + 1}. ${lis.join(" → ")}</p>`));
    html += "</div>";
  }

  resultDiv.innerHTML = html;
}

function displaySteps() {
  const stepsDiv = document.getElementById("stepsSection");
  stepsDiv.style.display = "block";

  let html = "<h3>🔍 Langkah-langkah Algoritma Dynamic Programming</h3>";
  const dp = Array(sequence.length).fill(1);

  html +=
    '<div class="step"><strong>Inisialisasi:</strong> Setiap elemen memiliki LIS minimal 1</div>';

  for (let i = 1; i < sequence.length; i++) {
    html += `<div class="step"><strong>Proses arr[${i}] = ${sequence[i]}:</strong><br>`;
    for (let j = 0; j < i; j++) {
      if (sequence[j] < sequence[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        html += `- arr[${j}] < arr[${i}] → dp[${i}] = ${dp[i]}<br>`;
      }
    }
    html += "</div>";
  }

  stepsDiv.innerHTML = html;
}

function solveLIS() {
  parseInput();
  if (sequence.length === 0) {
    alert("Masukkan urutan bilangan yang valid!");
    return;
  }

  lisResult = findAllLIS(sequence);
  document.getElementById("treeContainer").style.display = "block";
  drawTree(sequence);
  displayResults();
  displaySteps();
}

function generateRandom() {
  const length = 8 + Math.floor(Math.random() * 5);
  const random = [];
  for (let i = 0; i < length; i++) random.push(Math.floor(Math.random() * 20));
  document.getElementById("sequenceInput").value = random.join(", ");
}

function resetAll() {
  document.getElementById("sequenceInput").value =
    "4, 1, 13, 7, 0, 2, 8, 11, 3";
  document.getElementById("treeContainer").style.display = "none";
  document.getElementById("resultSection").style.display = "none";
  document.getElementById("stepsSection").style.display = "none";
}
