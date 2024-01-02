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

const buttonsCalc = document.querySelectorAll('.calculator button');

const displayCalc = document.querySelector('.display');

buttonsCalc.forEach(button => {
  button.addEventListener('click', () => {
    firstNumber = button.textContent;
    displayCalc.textContent += firstNumber;
  })
})



// To assign the clicked buttons to the correct variables, the following should happen: 
  // The first buttons will be assigned to the firstNumber variable, always, while it is still a number
  // Then, if a button is an operator, that will be assigned to the operator variable. Keeps on going while it is still operator. 
  // If the next button is a number, assign to the secondNumber variable. Then: 
    // If at any point the AC button is pressed, clear everything. Highest priority. 
    // If the = button or another arithmetic button is pressed, then return the computed value. In the latter case, assume that this is the new operator variable. 

// To do this, I will create a global display variable and a function that is called at every event click. 
// This function will read the clicked argument and assign it to the firstNumber, operator and secondNumber variables following what was established above. 
