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
        if (button.value >= '1' && button.value <= '9')  {
          primulOperator = button.value;
          phase2 = 1;
        } else if (button.value == '0') {
          phase2 = 1;
        }
        else if (button.value == '.') {
          primulOperator += '.';
          decimal1 = true;
        }
        else if (button.value == '-') primulOperator = button.value;

        display.innerHTML = primulOperator;
        contor++;
        phase1 = 1;
    
      } else if (contor <= 7 && (button.value >= '0' && button.value <= '9' || (button.value == '.' &&  //Continuare primului termen
      decimal1 == false)) && phase1 == 1) { //2.
        if (button.value == '0') {
          if (primulOperator == '-0') {
            ;
          }
          if (primulOperator == '0') {
            ;
          }
          else {
            primulOperator += '0';
            display.innerHTML = primulOperator;
            contor++;
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
          if (primulOperator.charAt(primulOperator.length - 1) != '.') {
            phase2 = 1;
          }
      }
    }
    
    //Operator
 
    if ((button.value == '-' || button.value == '+' || button.value == '/' || button.value == '*' || button.value == '%') && phase2 == 1) {
        phase1 = 3;
        operatie = button.value;
        display.innerHTML = primulOperator + operatie;
      }

    //Al doilea termen
    if (contor2 <= 6 && phase1 == 3 && (button.classList == 'operand' || button.value == '.')) {

      phase2 = 3; //dezactivez operatia


      if (secondOperator == '0') {
        if (button.value == '0') display.innerHTML = primulOperator + operatie + secondOperator;
        if (button.value == '.' && !decimal2) {
          secondOperator += button.value;
          display.innerHTML += button.value;
          decimal2 = true;
        }
        if (button.value >= '1' && button.value <= '9') {
          secondOperator = button.value;
          display.innerHTML = primulOperator + operatie + secondOperator;
          contor2++;
        }
      } else if (button.value == '.') {
          if (!decimal2) {
            secondOperator += button.value;
            display.innerHTML += button.value;
            decimal2 = true;
          }
        } else if (button.value >= '1' && button.value <= '9') {
          secondOperator += button.value;
          display.innerHTML += button.value;
          contor2++;
        }
      }
  
    //Egal
    if (button.value == '=') {
      display.innerHTML = eval(primulOperator + operatie + secondOperator);
      primulOperator = display.innerHTML;
      secondOperator = '0';

      contor2 = 0;
      phase1 = 3;
      phase2 = 1;
    }
    if (button.value == 'clear') { //A/C
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


