const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people');

// console.log(fetchPromise);

// const user = {
//   name: 'ahah',
//   age: 3333
// };

// user.name;

fetchPromise.then(response => {
  return response.json();
}).then(people => {
  console.log(people);
  // Array.prototype.map();
  // Array.map();
  
  const names = people.map(person => person.name);
  console.log(names);
  
  // name > 5
  // name < 10
  const peopleList = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].name.length >= 5 && people[i].name.length < 10) {
      peopleList.push(people[i]);
    }
  }
  console.log(peopleList);

  const peopleListForEach = [];
  people.forEach(person => {
    if (person.name.length >= 5 && person.name.length < 10) {
      peopleListForEach.push(person);
    }
  });
  console.log(peopleListForEach);

});

const numbers = [1, 2, 3, 4, 5];
const incremenetTwo = numbers.map(number => 2 * number);
console.log(incremenetTwo);

const greaterThenThree = numbers.filter(number => number > 3);
console.log(greaterThenThree);

console.log(7 > 6 > 5); // 1 > 5 => false
console.log(5 < 6 < 7); // 1 < 7 => true

// true = 1
// false = 0

// setInterval(() => console.log('Hello'), 5000);
// setTimeout(() => console.log('Hello with Set Timeout'), 5000);
