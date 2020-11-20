const number1 = Number(prompt('Take a number'));

if (/* conditional */ number1 < 30) {
  // runs statement_1 (is truthy)
  console.log('true, equals');
} else {
  // runs statement_false (is falsy)
  console.log('false, not equals')
}

const age = prompt('How old are you?', '');
let accessAllowed;

if (age >= 18 && age <= 36) { // 18, 19, 20,...36
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

let message = '';
if (age < 3) { // less than 3 (until 3)
  message = 'hi, baby!';
} else if (age < 18) { // less than 18 (between 4..17)
  message = 'hello!';
} else if (age < 100) { // less than 100 (between 18...99)
  message = 'greetings!';
} else { // otherwise
  message = 'what an unusual age!';
}

alert(message);

// Boolean convention
if (0) { // falsy
}

if (1) { // truthy
}

const company = prompt('Which company created JavaScript?', '');

if (company === 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}

const companyReact = prompt('Which company created React.js?', '');

if (companyReact === 'Facebook') {
  alert('Right!');
} else {
  alert('Wrong.');
}

const value = prompt('What is the "official" name of JavaScript?', '');

if (value === 'ECMAScript') { // ES6, ES7, ES8, ...
  alert('Right!');
} else {
  alert('Wrong');
}

const sum = 2 + 2;
console.log(sum);
if (sum == 3) {
  console.log('Too small');
} else if (sum == 4) {
  console.log('Exactly');
} else if (sum == 5) {
  console.log('Too large.');
} else {
  console.log('I do not\n know such values');
}
