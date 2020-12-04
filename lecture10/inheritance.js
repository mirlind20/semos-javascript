// parent
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} eats`);
  }
}

// child
class Bird extends Animal {
  constructor(name, numWings) {
    super(name);
    this.numWings = numWings;
  }
}

const bird = new Bird('Bob', 2);
console.log(bird.name);
console.log(bird.numWings);
bird.eat();

class Cat extends Animal { 
  constructor(name) {
    super(name);
  }
}

class Chicken extends Animal {
  constructor(name) {
    super(name);
  }
}

const cat = new Cat('Foo');
const chicken = new Chicken('Boo');
cat.eat();
chicken.eat();