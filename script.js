
let num1;
let operator;
let num2;



let numButtons = document.querySelectorAll('.btn-num');
let operatorButtons = document.querySelectorAll('.btn-operator');
let equalsButton = document.querySelector('.btn-equals');
let screenCurrent = document.querySelector('.screen-current');
let screenLast = document.querySelector('.screen-last');

let operatorSelected = false;


function getNumButtons() {
    numButtons.forEach((button) => {
        button.addEventListener('click', () => setNum(button.textContent))
    })
}

function getOperatorButtons() {
    operatorButtons.forEach((button) => {
        button.addEventListener('click', () => setOperator(button.textContent))
    })
}

function setNum(number) {
    if (operatorSelected === false) {
        screenCurrent.textContent += number;
        num1 = screenCurrent.textContent;
    } else {
        screenCurrent.textContent += number;
        
    }
}

function setOperator(op) {
    if (operatorSelected === false) {
        screenLast.textContent = screenCurrent.textContent + ' ' + op;
        operator = op;
        screenCurrent.textContent = '';
        operatorSelected = true;
        calculate();
    }
}


function calculate() {
    equalsButton.addEventListener('click', () => {
        num2 = screenCurrent.textContent;
        console.log(num1, num2, operator);
    })
} 





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

function operate(operator, num1, num2) {
     return operator(num1, num2);
}


getNumButtons();
getOperatorButtons();


// use switch statement for operate function