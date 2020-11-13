// Declaring a variable
// ES5 = var
// ES6+ += let, const => var, let, const

// let, var, const

let myName; //variable name   , variable type isString
let myAge;  //variable name    , variable type is Number
let isApproved; //variable name   Boolean
let gender; //variable name    undefined
let isNull; //variable name    null

// Initializing a variable

// String
// double notation "", single notation ''
myName = 'John James';
myName = 'Bon Ton';

// Nubmber
// Whole numbers (integers) 10, 4, 26, 78, 100, 101 etc.. 
// Decimal numbers (floats) 1.25, 0.15, 0.5, 22.55, 99.99, 156.9724683
myAge = 89;

// Boolean
// true/false values
isApproved = false;
isApproved = true;

// Null
isNull = null;

console.log(myName);
console.log(myAge);
console.log(isApproved);
console.log(gender);
console.log(isNull);

// Check typeof variables
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isApproved);
console.log(typeof gender);
console.log(typeof isNull);


// Constants variables
// Concept of a constant - a value that once be declared can not be changed

// const = keyword (store values that can never be changed)

const name = "James Hetfield";
const username = "papajames";
const genderType = "male";
const age = 57;
const isBestSinger = true;

console.log(name);
console.log(username);
console.log(genderType);
console.log(age);
console.log(isBestSinger);

// name = "Jonny"; // Cannot be assingment to const declaration value