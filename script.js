let displayValue = '0';
const DISPLAYLIMIT = 10;
let stashedNumber;
let operator;
let result;

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
    console.log('stashedNumber: ' + stashedNumber);
    console.log('operator: ' + operator);
  })
})

function processClicked(value) {
  if (value === 'AC') {

    displayValue = '0';
    stashedNumber = 0;
    secondNumber = 0;
    operator = null;
    displayCalc.textContent = displayValue;

  } else if (+value) {

    if (displayValue.length < DISPLAYLIMIT) {
      displayValue === '0' ?
        displayValue = value :
        displayValue += value;
      displayCalc.textContent = displayValue;
    }

  } else if (value === '+' || value === '-' || value === '/' || value === '*') {
    stashedNumber = +displayValue;
    displayValue = '0';
    operator = value;
    
  } else if (value === '=') {
    displayValue = operate(FUNCTION_LIB[operator], +stashedNumber, +displayValue);
    stashedNumber = 0;
    displayCalc.textContent = displayValue;
  }
}

// To assign the clicked buttons to the correct variables, the following should happen: 
  // The first buttons will be assigned to the firstNumber variable, always, while it is still a number
  // Then, if a button is an operator, that will be assigned to the operator variable. Keeps on going while it is still operator. 
  // If the next button is a number, assign to the secondNumber variable. Then: 
    // If at any point the AC button is pressed, clear everything. Highest priority. 
    // If the = button or another arithmetic button is pressed, then return the computed value. In the latter case, assume that this is the new operator variable. 

// To do this, I will create a global display variable and a function that is called at every event click. 
// This function will read the clicked argument and assign it to the firstNumber, operator and secondNumber variables following what was established above. 
