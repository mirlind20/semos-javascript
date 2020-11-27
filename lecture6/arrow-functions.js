const sum = function (a, b) {
  return a + b;
}


// => (>=) 

const sumArrow = (a, b) => {
  return a + b;
}

const sumShorter = (a, b) => a + b;

console.log('Function Expression', sum(2, 3));
console.log('Arrow function', sumArrow(2, 3));
console.log('Shorter arrow syntax', sumShorter(2 ,3));


// const calcArea = function (radius) {
//   const PI = Math.PI;
//   return PI * radius ** 2;
// }

// arrow function
const calcArea = radius => 3.14 * radius ** 2;

const area = calcArea(7);
console.log(area);

const double = n => n * 2;
console.log(double(3));

const userList = [
  {
    id: 1,
    firstName: 'Bon',
    lastName: 'Marley',
    age: 20,
    gender: 'male'
  },
  {
    id: 2,
    firstName: 'Bon',
    lastName: 'Marley',
    age: 20,
    gender: 'male'
  },
  {
    id: 3,
    firstName: 'Bon',
    lastName: 'Marley',
    age: 20,
    gender: 'male'
  }
] // array of objects

const listUsers = (users) => {
  const ids = [];
  for (let i = 0; i < users.length; i++) {
    ids.push(users[i].id);
  }
  return ids;
};

console.log(listUsers(userList));

const addUser = (users) => {
  const newUser = {
    id: 666,
    firstName: 'Bon',
    lastName: 'Marley',
    age: 20,
    gender: 'male'
  };

  // const mergedData = [...users, newUser];
  // return mergedData;

  return [...users, newUser];
}

console.log(addUser(userList));
