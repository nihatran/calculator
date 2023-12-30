
let num1;
let operator;
let num2;

let numButtons = document.querySelectorAll('.btn-num');
let operatorButtons = document.querySelectorAll('.btn-operator');
let equalsButton = document.querySelector('.btn-equals');
let screenCurrent = document.querySelector('.screen-current');
let screenLast = document.querySelector('.screen-last');


function assignNumButtons() {
    numButtons.forEach((button) => {
        button.addEventListener('click', () => displayNum(button.textContent))
    })
}


function displayNum(number) {
    screenCurrent.textContent += number;
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


assignNumButtons();





// add event onclick to display the value it is 