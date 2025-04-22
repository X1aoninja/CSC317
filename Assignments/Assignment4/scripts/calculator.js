const display = document.getElementById("display");
let current = "0";
let previous = "";
let operator = null;
let shouldReset = false;
let memory = 0;

function updateDisplay() {
  display.textContent = current;
}

function appendNumber(number) {
  if (current === "0" || shouldReset) {
    current = number;
    shouldReset = false;
  } else {
    current += number;
  }
}

function chooseOperator(op) {
  if (operator !== null) evaluate();
  previous = current;
  operator = op;
  shouldReset = true;
}

function evaluate() {
  if (operator === null || shouldReset) return;
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (operator === "÷" && curr === 0) {
    current = "Error";
    operator = null;
    return;
  }

  switch (operator) {
    case "+": current = (prev + curr).toString(); break;
    case "-": current = (prev - curr).toString(); break;
    case "×": current = (prev * curr).toString(); break;
    case "÷": current = (prev / curr).toString(); break;
  }

  operator = null;
  shouldReset = true;
}

function clear() {
  current = "0";
  previous = "";
  operator = null;
}

function toggleSign() {
  current = (parseFloat(current) * -1).toString();
}

function percent() {
  current = (parseFloat(current) / 100).toString();
}

function appendDecimal() {
  if (!current.includes(".")) {
    current += ".";
  }
  updateDisplay();
}

// Memory Functions
function memoryAdd() {
  memory += parseFloat(current);
}

function memorySubtract() {
  memory -= parseFloat(current);
}

function memoryRecall() {
  current = memory.toString();
  shouldReset = true;
}

function memoryClear() {
  memory = 0;
}

function handleButtonClick(e) {
  const btn = e.target;
  const num = btn.dataset.number;
  const action = btn.dataset.action;

  if (num !== undefined) {
    appendNumber(num);
  } else if (action !== undefined) {
    switch (action) {
      case "add": chooseOperator("+"); break;
      case "subtract": chooseOperator("-"); break;
      case "multiply": chooseOperator("×"); break;
      case "divide": chooseOperator("÷"); break;
      case "equals": evaluate(); break;
      case "clear": clear(); break;
      case "sign": toggleSign(); break;
      case "percent": percent(); break;
      case "memory-add": memoryAdd(); break;
      case "memory-subtract": memorySubtract(); break;
      case "memory-recall": memoryRecall(); break;
      case "memory-clear": memoryClear(); break;
    }
  }

  updateDisplay();
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") appendNumber(e.key);
  if (e.key === ".") appendDecimal();
  if (e.key === "+" || e.key === "-") chooseOperator(e.key);
  if (e.key === "*") chooseOperator("×");
  if (e.key === "/") chooseOperator("÷");
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") {
    current = current.slice(0, -1) || "0";
  }
  if (e.key === "Escape") clear();
  updateDisplay();
});

updateDisplay();
