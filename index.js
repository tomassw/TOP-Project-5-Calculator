/*Declarations*/
const buttons = document.querySelectorAll('button');
//--------------------------------------------------------

/*Event listener pentru cand este apasata o tasta 
- folosesc .click() ca sa actioneze singur butonul
*/


//Initializari
let contor = 0;
let contor2 = 0;
let expression;
let phase = 0;

const display = document.querySelector('#display');

let primulOperator = '0'
let operatie; 
let secondOperator = '0';
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
    if (button.classList == 'operand') {
      if (phase == 0 && contor == 0) {
          primulOperator = button.value;
          display.innerHTML = primulOperator;
          contor++;
          phase = 1;
      } else if (contor <= 7 && button.value >= '0' && button.value <= '9' && phase == 1) {
        primulOperator += button.value;
        display.innerHTML = primulOperator;
        contor++;
      }
    }
    if ((button.value == '-' || button.value == '+' || button.value == '/' || button.value == '*' || button.value == '%') && phase == 1) {
        phase = 2;
        operatie = button.value;
        display.innerHTML += operatie;
    }
    if (phase == 2 && button.value >= '0' && button.value <= '9' && contor2 == 0) {
        secondOperator = button.value;
        display.innerHTML += button.value;
        contor2++;
        phase = 3;
    } else if (contor2 <= 7 && phase == 3 && button.value >= '0' && button.value <= '9') {
      secondOperator += button.value;
      display.innerHTML += button.value;
      contor2++;
    }
    if (button.value == '=') {
      display.innerHTML = eval(primulOperator + operatie + secondOperator);
      contor = 0;
      contor2 = 0;
      phase = 0;
    }
    if (button.value == 'clear') {
      display.innerHTML = '0';
      contor = 0;
      contor2 = 0;
      phase = 0;
    }
  }); 
}









/*
    if (contor == 0) {
      if (button.value >='1' && button.value <= '9') {
        expression = `${button.value}`;
        contor++;
        display.innerHTML = expression;
      }
      if (button.value =='.') {
        expression += `${button.value}`;
        contor += 2;
        display.innerHTML = expression;
      }
      if (button.value == 'sign') {
        expression = '-';
        contor++;
        display.innerHTML = expression;
      }
    } else if (button.value == '=') {
        contor = 0;
        display.innerHTML = 'rezultat';
    } else if (button.value == 'clear') {
        contor = 0;
        display.innerHTML = '0';
    } else {

    }*/