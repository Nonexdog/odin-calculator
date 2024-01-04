let displayValue = '0';
const DISPLAYLIMIT = 10;
let stashedNumber = '0';
let operator = '+';
let result = '0';

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return b ? a * b : a;
}
function divide(a, b) {
  return b ? a / b : a;
}

const FUNCTION_LIB = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

function operate(calcFunction, num1, num2) {
  return calcFunction(num1, num2);
}

const buttonsCalc = document.querySelectorAll('.calculator button');

const displayCalc = document.querySelector('.display');
displayCalc.textContent = displayValue;

buttonsCalc.forEach(button => {
  button.addEventListener('click', () => {
    let clickedButton = button.textContent;
    console.log('clicked: ' + clickedButton);
    processClicked(clickedButton);
    console.log('stashedNumber: ' + stashedNumber);
    console.log('operator: ' + operator);
    console.log('displayValue: ' + displayValue);
    console.log('result: ' + result);
  })
})

function processClicked(value) {
  if (value === 'AC') {

    displayValue = '0';
    stashedNumber = '0';
    operator = '+';
    result = '0';
    displayCalc.textContent = displayValue;

  } else if ((+value || value === '0') && displayValue.length < DISPLAYLIMIT) {

    displayValue === '0' ?
      displayValue = value :
      displayValue += value;
    displayCalc.textContent = displayValue;

  } else if (value === '.' && !displayValue.includes('.')) {

    displayValue += '.';
    displayCalc.textContent = displayValue;
    
  } else if (value in FUNCTION_LIB) {

    if (+stashedNumber) {
      operator = value;
      setResult();
    } else {
      stashedNumber = +displayValue;
      displayValue = '0';
      operator = value;
    }

  } else if (value === '=') {
    setResult();
  }
}

function setResult() {
  if (operator === '/' && displayValue === '0') {
    stashedNumber = '0';
    displayValue = '0';
    result = '0';
    operator = '+';
    displayCalc.textContent = 'UM... NUH UH'
  } else {
    result = operate(FUNCTION_LIB[operator], +stashedNumber, +displayValue);
    stashedNumber = result;
    displayValue = '0';
    displayCalc.textContent = result;
    result = '0';
  }
}

