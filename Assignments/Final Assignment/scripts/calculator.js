const display = document.getElementById("display");

let currentInput = "0";
let previousInput = "";
let currentOperator = null;
let resetNext = false;
let memory = 0;

function updateDisplay() {
  display.textContent = currentInput;
}

function resetCalculator() {
  currentInput = "0";
  previousInput = "";
  currentOperator = null;
  resetNext = false;
}

function appendNumber(number) {
  if (currentInput === "Error") return;
  if (currentInput === "0" || resetNext) {
    currentInput = number;
    resetNext = false;
  } else {
    currentInput += number;
  }
}

function appendDecimal() {
  if (currentInput === "Error") return;
  if (!currentInput.includes(".")) {
    currentInput += ".";
  }
}

function chooseOperator(op) {
  if (currentInput === "Error") return;
  if (currentOperator !== null) evaluate();
  previousInput = currentInput;
  currentOperator = op;
  resetNext = true;
}

function evaluate() {
  if (currentOperator === null || resetNext || currentInput === "Error") return;

  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  if (currentOperator === "÷" && curr === 0) {
    currentInput = "Error";
    currentOperator = null;
    return;
  }

  switch (currentOperator) {
    case "+": currentInput = (prev + curr).toString(); break;
    case "-": currentInput = (prev - curr).toString(); break;
    case "×": currentInput = (prev * curr).toString(); break;
    case "÷": currentInput = (prev / curr).toString(); break;
  }

  currentOperator = null;
  resetNext = true;
}

function toggleSign() {
  if (currentInput === "Error") return;
  currentInput = (parseFloat(currentInput) * -1).toString();
}

function percent() {
  if (currentInput === "Error") return;
  currentInput = (parseFloat(currentInput) / 100).toString();
}

function handleAction(action) {
  switch (action) {
    case "clear": resetCalculator(); break;
    case "sign": toggleSign(); break;
    case "percent": percent(); break;
    case "equals": evaluate(); break;
    case "decimal": appendDecimal(); break;
    case "add": chooseOperator("+"); break;
    case "subtract": chooseOperator("-"); break;
    case "multiply": chooseOperator("×"); break;
    case "divide": chooseOperator("÷"); break;
    case "memory-add": memory += parseFloat(currentInput); break;
    case "memory-subtract": memory -= parseFloat(currentInput); break;
    case "memory-recall":
      currentInput = memory.toString();
      resetNext = true;
      break;
    case "memory-clear": memory = 0; break;
  }
}

function handleButtonClick(e) {
  const button = e.target;
  const number = button.dataset.number;
  const action = button.dataset.action;

  if (currentInput === "Error" && action !== "clear") return;

  if (number !== undefined) {
    appendNumber(number);
  } else if (action !== undefined) {
    handleAction(action);
  }

  updateDisplay();
}

document.querySelectorAll("button").forEach(button =>
  button.addEventListener("click", handleButtonClick)
);

document.addEventListener("keydown", e => {
  if (currentInput === "Error" && e.key !== "Escape") return;

  if (e.key >= "0" && e.key <= "9") appendNumber(e.key);
  if (e.key === ".") appendDecimal();
  if (e.key === "+") chooseOperator("+");
  if (e.key === "-") chooseOperator("-");
  if (e.key === "*") chooseOperator("×");
  if (e.key === "/") chooseOperator("÷");
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1) || "0";
  }
  if (e.key === "Escape") resetCalculator();

  updateDisplay();
});

updateDisplay();
