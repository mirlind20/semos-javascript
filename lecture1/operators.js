// Assignment operator 
// =
const hasBook = true;


// Arithmetic operators
// + (addition) a + b
// - (subtraction) a - b
// * (multiplication) a * b
// / (division) a / b
// % (remainder) a / b (10 % 3), 1
// ** (exponent) 5 ** 2 (returns 25, as 5 * 5)

const firstName = "Toni";
const lastName = "Parker";

const fullName = firstName + lastName;
console.log(fullName); // ToniParker

// wrong
const stringA = '1name';
const stringx = '&da';

// Toni Parker
const blankSpace = ' ';
console.log(blankSpace);

const nameWithSpace = firstName + blankSpace + lastName;
console.log(nameWithSpace);

const nameSpace = firstName + ' ' + lastName;
console.log('Full name is: ',nameSpace);


const numberA = 25;
const numberB = 15;
const numberC = 20.55;
const numberD = 150;

const sum = numberA + numberB + numberC + numberD;
console.log('Sum of a + b + c + d: ', sum);

const diff = numberA - numberD;
console.log(diff);

const multi = numberB * numberC;
console.log(multi);

const remainder = numberD % numberC;
console.log(remainder);

const exponent = 5 ** 2;
console.log(exponent);

// Comparison operators
// < (less than) left value < right value 8 < 6 (false)
// > (greater than) left value > right value 8 > 6 (true)
// <= (less than or equal to) left value is smaller than or equal to the right value 4 <= 3
// >= (greater than or equal to) left value is greater than or equal to the right value 5 >= 2
// == (both values are same) 15 == '15' 
// === (strict equality) left and right values are identical to one another 15 === 15 (true), 15 === '15' (false), 5 === 3 + 3
// '!==' (strict non equality) left and right values are NOT || - || - 5 !== 2 + 3

const lessThan = numberA < numberB;
console.log(lessThan);

// Good way
// isLessThan
// isGreaterThan
// is..
// areSame

const greaterThan = numberA > numberC;
console.log(greaterThan);

const lessOrEqual = numberA <= numberD;
console.log(lessOrEqual);

const greaterOrEqual = numberA >= numberB;
console.log(greaterOrEqual);

const bothEquals = 15 == '15';
console.log(bothEquals);

const strictEquality = 15 === 15;
console.log(strictEquality);

const strictNonEquality = 5 !== 2 + 3;
console.log(strictNonEquality);

// 25 
// 20

const check = numberA !== 25;
console.log(check);

const checkTypeAndValue = numberA !== '25';
console.log(checkTypeAndValue);
