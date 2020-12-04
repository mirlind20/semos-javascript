class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get firstName() {
    return `${this._firstName}`;
  }

  get lastName() {
    return `${this._lastName}`;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  sayHi() {
    return `Hi ${this.firstName} ${this.lastName} there`;
  }
}

const person = new Person('Kurt', 'Cobain');
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
person.firstName = 'John';
person.lastName = 'Bon Jovi';
console.log('Full name of a new person is', person.firstName, person.lastName);

// const obj = new Object();


// object representation
const personObj = {
  firstName: 'firstName',
  lastName: 'ehehe',
  sayHi: function() {
    return `Hi ${this.firstName} ${this.lastName} there` 
  }
}
