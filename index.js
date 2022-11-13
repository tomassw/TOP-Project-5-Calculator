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
let phase1 = 0;
let phase2 = 0

const display = document.querySelector('#display');

let primulOperator = '0'
let operatie; 
let secondOperator = '0';

let decimal1 = false;
let decimal2 = false;
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

    //Primul termen

    //Initializare primul termen
    if (button.classList == 'operand' || button.value == '.' || button.value == '-') { 
      if (phase1 == 0 && contor == 0) { //1. 3 scenarii: incepe cu -, cu 0. sau cu o cifra diferita de 0
        if (button.value >= '1' && button.value <= '9') primulOperator = button.value;
        else if (button.value == '.') {
          primulOperator += '.';
          decimal1 = true;
        }
        else if (button.value == '-') primulOperator = button.value;

        display.innerHTML = primulOperator;
        contor++;
        phase1 = 1;

    
      } else if (contor <= 7 && (button.value >= '0' && button.value <= '9' || (button.value == '.' &&  //Continuare primului termen
      decimal1 == false)) && phase1 == 1 && phase2 == 0) { //2.
        if (button.value == '0') {
          if (primulOperator == '-0') {
            ;
          }
          if (primulOperator == '0') {
            ;
          }
        } else if (button.value == '.') {
            if (decimal1 != true && primulOperator != '-') {
              decimal1 = true;
              primulOperator += button.value;
              display.innerHTML = primulOperator;
            }
          } else {
            if (primulOperator == '0') {
              primulOperator = button.value;
            } else {
              primulOperator += button.value;
              display.innerHTML = primulOperator;
              contor++;
            }
          }
      }
    }
    
    //Operator
    if ((button.value == '-' || button.value == '+' || button.value == '/' || button.value == '*' || button.value == '%') && phase2 == 1) {
        phase2 = 1;
        operatie = button.value;
        display.innerHTML += operatie;
    }

    //Al doilea termen
    if (phase2 == 1 && button.value >= '0' && button.value <= '9' && contor2 == 0) {
        secondOperator = button.value;
        display.innerHTML += button.value;
        contor2++;
        phase2 = 2;
    } else if (contor2 <= 7 && phase2 == 2 && button.value >= '0' && button.value <= '9') {
      secondOperator += button.value;
      display.innerHTML += button.value;
      contor2++;
    }
    if (button.value == '=') {
      display.innerHTML = eval(primulOperator + operatie + secondOperator);
      contor = 0;
      contor2 = 0;
      phase1 = 0;
      phase2 = 0;
    }
    if (button.value == 'clear') {
      display.innerHTML = '0';
      contor = 0;
      contor2 = 0;
      phase1 = 0;
      phase2 = 0;
      decimal1 = 0;
      decimal2 = 0;

      primulOperator = '0';
      secondOperator = '0';

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