// 2, 3, 5, 7, 11, 55, 101
const numbersText = "2 3 5 7 11"; // String representation

                    // 0, 1, 2, 3, 4 ... (n - 1), n = length          
const listOfNumbers = [2, 3, 5, 7, 11, 26, 99]; // array = a list of values between square brackets, separated by commas
console.log(listOfNumbers); 

const listOfNumbersLength = listOfNumbers.length; // to get the length of a list
console.log(listOfNumbersLength); // 5

const getThirdNumber = listOfNumbers[2];
console.log(getThirdNumber);

const getPrev = listOfNumbers[listOfNumbersLength - 2];
console.log('Prev', getPrev);

const friends = ['Toni', 'Moni', 'Koki', 'Dule', 'Pero', 'Tosho'];
const getSecondItemFromList = friends[1];
console.log(getSecondItemFromList);

// push method adds values to the end of an array
const friendRequests = [2, false, 'Taki', 'Cetiri'];
friends.push(friendRequests);
console.log(friends);

friends.push(...friendRequests);
console.log(friends);

friends.push('None');
console.log(friends);

// pop method does the opposite (push method), removing the last value in the array and returing it
listOfNumbers.pop();
console.log(listOfNumbers);
