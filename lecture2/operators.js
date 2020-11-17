// Logical operators
// Boolean (logic) values, return true/false


let a = true;
let b = false;
//Logical AND (&&)
let logicalAnd = a && b; // false 
// true && true = true
// true && false = false
// false && true = false
// false && false = false

let password = false;
let confirmPassword = true;
let checkPass = password && confirmPassword;

console.log('Check pass', checkPass);

const number1 = 4;
const number2 = 2;
const areBothNumbersGtThree = number1 > 3 && number2 > 3;

console.log('Check numbers with logical AND', areBothNumbersGtThree)


// Logical OR (||)
// false || false = false 
// false || true = true
// true || false = true
// true || true = true

const logicalOr = number1 > 3 || number2 > 3;
console.log('Check numbers with logical OR', logicalOr);

console.log('Check OR', 3 > 2 || -2 > 0 || '2' === 2 || 'hello' === 'hello')
console.log('Check AND', 3 > 2 && -2 > 0 && '2' === 2 && 'hello' === 'hello')

const checkANDandOR = (3 > 2 && -2 < 0) || ('2' == 2 && 'hello' === 'hello'); // true || true => true
console.log(checkANDandOR); // true

const checkLogical = (3 > 2 || -2 < 0) && ('2' === 2 || 'hello' !== 'hello'); // true && false => false
console.log(checkLogical); // false


// Logical NOT (!) 
// negation
// truth to falsity <=>

// number1 = 4
// number2 = 2
const checkWithNegation = !(4 > 3 || 2 < -3); // true => false
const makeNegation = !checkWithNegation; // false => true
console.log('Negation', checkWithNegation); // false
console.log('Negation 222', makeNegation); // true

const checkWithNegation1 = (number1 > 3 || number2 < -3);
const makeNegation1 = !checkWithNegation1;
console.log(checkWithNegation1) // true
console.log(makeNegation1) // false

const checkWithNegation2 = (number1 > 3 && !(number2 < -3));
const makeNegation2 = !checkWithNegation2;
console.log(checkWithNegation2) // true
console.log(makeNegation2) // false


const check1 = (3 > 2);
console.log(!!!!true);
console.log(!!!false);

// ternary operator result ? true :

const ternaryCheck = 4 > 3 ? true : false;
console.log('Ternary', ternaryCheck);

const ternary1 = 4 < 3 ? true : false;
console.log('Ternary 1', ternary1);

const shortSyntaxTernary1 = !!(4 < 3);  // same as line 77
console.log('shortSyntaxTernary1', shortSyntaxTernary1);

const ternaryString = 4 === 4 ? 'Correct' : 'Wrong';
console.log('Return string with', ternaryString);

const ternaryString1 = 4 !== 4 ? 'Correct' : 'Wrong';
console.log('Return string with', ternaryString1);