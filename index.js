/*Declarations*/
let displayValue = '0';

let firstOperand = null;
let secondOperand = null;

let firstOperator = null;
let secondOperator = null;

let result = null;

const buttons = document.querySelectorAll('button');
//--------------------------------------------------------

/*Event listener pentru cand este apasata o tasta 
- keydown corespunzator la atribut in html
- folosesc .click() ca sa actioneze singur butonul
*/
window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});

function updateDisplay() {
    const display = document.querySelector('display');
    display.innerText = displayValue;
    if (displayValue.lenght > 9) {
        display.innerText = displayValue.substring(0,9);
    }
}

updateDisplay();

function clickButton() {
    for(let i = 0; i < button.lenght; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('operand')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            } else if (buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if (buttons[i].classList.contains('decimal')) {
                inputDecimal(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains('percent')) {
                inputDecimal(displayValue);
                updateDisplay();
            } else if (buttons[i].classList.contains('sign')) {
                inputDecimal(displayValue);
                updateDisplay();
            } else if (buttons[i].classList.contains('clear')) {
                clearDisplay();
                updateDisplay();
            }
        });
    }
}

clickButton();

function inputOperand(operand) {
    if(firstOperator === null) {
        if(displayValue === '0' || displayValue === 0) {
            //1st click - handles first operand input
            displayValue = operand;
        } else if(displayValue === firstOperand) {
            //starts new operation after inputEquals()
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        //3rd/5th click - inputs to secondOperand
        if(displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}