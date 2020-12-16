class Animal {
  constructor(name) {
    this.name = name;
  }

  static type = 'Type1';

  static speak(name) {
    return `${name} says`;
  }

  eat() {
    return `${this.name} eats`;
  }
}

const animal = new Animal('Bob');
animal.type;
animal.name;
animal.speak;
animal.eat;

console.log(Animal.type);
// animal.speak(); // the Animal object
const staticMethodSpeak = Animal.speak('Foo');
console.log(staticMethodSpeak);
// const speak = Animal.speak;
// speak();

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  static c = 6;

  static sum(a, b) {
    return a + b;
  }

  mul(a, b) {
    return a * b; 
  }

  calsSum() {
    sum(this.a, this.b);
  }
}

const calc1 = new Calculator(5, 4);
const cacl2 = new Calculator(4, 4);

calc1.c = '8'; // 

// cal.sum;

// const mul = a.mul(5, 5);
// console.log(mul);

// Calculator.sum();
console.log(Calculator.sum(7, 9));

const sum = Calculator.sum(6, 8);
console.log(sum);

const calcStatics = Calculator.sum(5, 9) + Calculator.c;
console.log(calcStatics);
