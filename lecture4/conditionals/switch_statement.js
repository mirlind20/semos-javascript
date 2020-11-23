
const sum = 2 + 2;

// if (sum == 3) {
//   console.log(sum);
// } else if (sum == 4) {
//   console.log(sum);
// } else if (sum == 5) {
//   console.log(sum);
// } else {
//   console.log('upsss');
// }

let result = 0;
switch (sum) { // input parameter
  case 3: // if sum == 3, then switch starts to execute the code 
    console.log('Too small');
    result = sum;
    break; // the end of switch
  case 4: // else if (sum == 4)
    console.log('Exactly!');
    break;
  case 5: // else if (sum == 5)
    console.log('Too large!');
    break;
  default: // else
    console.log('I do not know such values');
}

// Grouping of "case"
switch (7) {
  case 3: // (*) grouped two cases
  case 5:
  case 7:
  case 1:
    console.log('Wrong');
    console.log('Why do not you take a math class? :)');
    break;
  case 4:
    console.log('Right!');
    break;
  default:
    console.log('The result is strange.');
}
