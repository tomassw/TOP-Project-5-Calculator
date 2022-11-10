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

window.addEventListener('keydown', function (e) {
    document.querySelector('#display').innerHTML = `You pressed ${e.key}`;
  }, false);
