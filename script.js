let firstNumber;
let secondNumber;
let operator;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(calcFunction, num1, num2) {
  return calcFunction(num1, num2);
}