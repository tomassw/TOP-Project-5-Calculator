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
- folosesc .click() ca sa actioneze singur butonul
*/


//Initializari
let contor = 0;
let expression;

const display = document.querySelector('#display');


//Keyboard action
/*
window.addEventListener('keydown', function(e) {
  display.innerHTML = `You pressed ${e.key}`;
  if (e.key === '1') e.key.click;
}, false);  
*/

//Click action
for (const button of buttons) {
  button.addEventListener('click', function onClick() {

    if (contor == 0 && ((button.value >= '1' && button.value <= ('9')) || button.value == '()'  || button.value == '-')) {
      expression = `${button.value}`;

      contor++;

      display.innerHTML = expression;

    } else if (contor > 0 && contor <= 10) {
        if (contor <= 9) {
          if (button.value >= '0' && button.value <='9') { 
            expression += `${button.value}`;
            contor++;
            display.innerHTML = expression;
          }
        }
        if (button.value == '=') {
          contor = 0;
          display.innerHTML = 'rezultat';
        }
        if (button.value == 'clear') {
          display.innerHTML = '0';
          contor = 0;
        }
    }
  });
}