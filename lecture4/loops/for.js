// for (begin; condition; step) {
  // loop body
// }

 // begin === initialExpression
 // condition === conditionExpression
 // step === incrementExpression
// body === statement

for (let i = 0; i < 5; i++) { // shows 0, then 1, then 2, then 2, then 4
  console.log(i);
}

// i++ === i = i + 1 || 
// i += 1 === i = i + 1 

// for statement path-by-path:
// begin:       i = 0             Executes once upon entering the loop
// condition:   i < 5             Checked before every loop iteration. If false, the loop stops.
// body         console.log(i)    Runs again and again while the condition is truthy.  
// step         i++               Executes after the body on each iterations


let result;
for (let i = 0; i <= 3; i++) {
  result = i;
}
console.log(result); // 3

const cartoons = ['Tom', 'Jerry', 'Bouli'];
// cartoons.length = 3
for (let i = 0; i <= cartoons.length - 1; i++) {
  console.log(cartoons[i]); // cartoons[0], cartoons[1], cartoons[2]
}

// cartoons.length = 3
for (let i = 0; i < cartoons.length; i++) { // shows Tom, then Jerry, then Bouli
  console.log(cartoons[i]); // cartoons[0], cartoons[1], cartoons[2]
}

// for (variable in object) {
  // statement
// }

// for (variable of object) {
  // statement
// }

cartoons.push('Teddy Floppy Ear');
console.log(cartoons);


cartoons.unshift("Pat and Mat"); // Insterts new elements at the start of the Array cartoons
console.log(cartoons);


cartoons.shift(); // Removes the first element from an array and returs it
console.log(cartoons);

cartoons.unshift('The Smurfs');

cartoons.push('Goodbye! Sweet dreams! Have a nice weekend!');

for (let i = 0; i < cartoons.length; i++) { // shows 0, then 1, then 3
  console.log(i);
}

for (let i in cartoons) { // shows 0, then 1, then 3
  // console.log(i); // indexes
  console.log(`Item of the list cartoons with index ${i} is`, cartoons[i]); // Jerry
}

for (let i = 0; i < cartoons.length; i++) { // shows Tom, then Jerry, then Bouli
  console.log(cartoons[i]); // cartoons[0], cartoons[1], cartoons[2]
}

for (let i of cartoons) { // for .. of // shows Tom, then Jerry, then Bouli
  console.log(i); // item value
}