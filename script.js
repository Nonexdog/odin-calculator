let displayValue = '0';
const DISPLAYLIMIT = 10;
let stashedNumber = '0';
let operator = '+';
let result = '0';
let resultLength;

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
  return a / b;
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
    processClicked(clickedButton);
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
  result = operate(FUNCTION_LIB[operator], +stashedNumber, +displayValue);
  limitDecimals();
  resultLength = result.toString().length;
  if (resultLength > DISPLAYLIMIT) {
    stashedNumber = '0';
    displayValue = '0';
    result = '0';
    operator = '+';
    displayCalc.textContent = 'Too Big!!'
  } else {
    if (result === Infinity || result === -Infinity) {
      stashedNumber = '0';
      displayValue = '0';
      result = '0';
      operator = '+';
      displayCalc.textContent = 'UM... NUH UH'
    } else {
      stashedNumber = result;
      displayValue = '0';
      displayCalc.textContent = result;
      result = '0';
    }
  }
}

function limitDecimals() {
  if (result.toString().includes('.')) {
    let initialRound = +result.toFixed(3);
    console.log(initialRound);
    resultLength = initialRound.toString().length;
    console.log(resultLength);
    const resultSplit = initialRound.toString().split('.');
    const resultIntegerLength = resultSplit[0].length;
    if (resultLength > DISPLAYLIMIT && resultIntegerLength <= DISPLAYLIMIT - 2) {
      result = initialRound.toFixed(resultLength - DISPLAYLIMIT);
    } else {
      result = initialRound;
    }
  }
}


