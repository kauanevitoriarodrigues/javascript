let currentInput = '';
let operation = '';
let previousInput = '';
function appendNumber (number) {
currentInput += number; updateDisplay ();
}
function setOperation (op) f
it (currentinput ===
if (previousInput |==
calculate();
return;
operation = op;
previousInput = currentInput;
currentinput ='';
function calculate() ‹
let result;
const prev = parseFloat (previousInput);
const current = parseFloat (currentInput) ;
if (isNaN(prev) || isNaN(current)) return;
switch (operation) {
case '+':result = prev + current; break;
case '-': result = prev - current; break;
case '*': result = prev * current; break;
case '/': result = prev / current; break;
default: return;
currentInput = result;
operation = '';
previousInput = '';
updateDisplay ();
function clearDisplay() 1
currentInput =
'':
operation = '';
previousInput = '';
updateDisplay ( );
function updateDisplay() t
document .getElementById('display').value = current Input;