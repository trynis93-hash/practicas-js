function add() {
  let firstNumber = parseInt(document.getElementById("num1").value);
  let secondNumber = parseInt(document.getElementById("num2").value);

  document.getElementById("result").textContent = firstNumber + secondNumber;
}

function subtract() {
  let firstNumber = parseInt(document.getElementById("num1").value);
  let secondNumber = parseInt(document.getElementById("num2").value);

  document.getElementById("result").textContent = firstNumber - secondNumber;
}

function multiply() {
  let firstNumber = parseInt(document.getElementById("num1").value);
  let secondNumber = parseInt(document.getElementById("num2").value);

  document.getElementById("result").textContent = firstNumber * secondNumber;
}

function divide() {
  let firstNumber = parseInt(document.getElementById("num1").value);
  let secondNumber = parseInt(document.getElementById("num2").value);

  document.getElementById("result").textContent = firstNumber / secondNumber;
}

function percentage() {
  let firstNumber = parseInt(document.getElementById("num1").value);
  let secondNumber = parseInt(document.getElementById("num2").value);

  document.getElementById("result").textContent = firstNumber % secondNumber;
}
