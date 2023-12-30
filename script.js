
let num1;
let operator;
let num2;
let result;

let numButtons = document.querySelectorAll('.btn-num');
let operatorButtons = document.querySelectorAll('.btn-operator');
let equalsButton = document.querySelector('.btn-equals');
let screenCurrent = document.querySelector('.screen-current');
let screenLast = document.querySelector('.screen-last');

let operatorSelected = false;

function resetScreenCurrent() {
    screenCurrent.textContent = '';
}

function resetScreenLast() {
    screenLast.textContent = '';
}

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
    } else {
        screenCurrent.textContent += number;
        num2 = parseInt(screenCurrent.textContent);
        calculate();
    }
}

function setOperator(op) {
    if (operatorSelected === false && screenCurrent.textContent !== '') {
        num1 = parseInt(screenCurrent.textContent);
        operator = op;
        screenLast.textContent = num1 + ' ' + op;
        resetScreenCurrent();
        operatorSelected = true;
    } 
}

function calculate() {
    equalsButton.addEventListener('click', () => {
        operate(operator, num1, num2);
    }, {once: true})
}

function clearCalculator() {

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
    switch(operator) {
        case '+':
            result = add(num1, num2);
            resetScreenCurrent();
            resetScreenLast();
            screenCurrent.textContent += result;
            operatorSelected = false;
            break;
        case '-':
            result = subtract(num1, num2);
            resetScreenCurrent();
            resetScreenLast();
            screenCurrent.textContent += result;
            operatorSelected = false;
            break;
        case 'x':
            result = multiply(num1, num2);
            resetScreenCurrent();
            resetScreenLast();
            screenCurrent.textContent += result;
            operatorSelected = false;
            break;
        case '÷':
            if(num2 === 0) {
                resetScreenCurrent();
                resetScreenLast();
                operatorSelected = false;
                break;
            } else {
                result = divide(num1, num2);
                resetScreenCurrent();
                resetScreenLast();
                screenCurrent.textContent += result;
                operatorSelected = false;
                break;
            }
    }
}


getNumButtons();
getOperatorButtons();
clearCalculator();


// use switch statement for operate function