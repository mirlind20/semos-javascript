const obj = {
  key: 'value'
}; // values of the type object

const colorString = 'red';
const backgroundColorString = 'green';

const style = {
  color: 'red',
  backgroundColor: 'green',
  padding: '0px',
  margin: '10px'
}; // object constructor

console.log(style);

// dot
const backgroundColorFromStyle = style.backgroundColor;
console.log('Background color', backgroundColorFromStyle);

// 
console.log('Padding', style['padding']);

const { margin, color, padding, backgroundColor } = style; // object destruction
console.log('Margin', margin);
console.log(color);
console.log(backgroundColor);



const description = {
  touchedTree: "Went to work",
  "touched tree": "Touched a tree"
};

console.log(description.touchedTree1); // reading a property that doesn't exist => undefined 
console.log(description['touchedTree']);

console.log(description["touched tree"]);

const anObject = {
  left: 1,
  right: 2
};

console.log(anObject);
console.log(anObject.left); // 1

// delete (cuts off)
delete anObject.left;
console.log(anObject); // 
console.log(anObject.left);

// Object.keys - to find out what properties an object has 
const newObject = {
  x: 0,
  y: 1,
  z: 2
};

const findProperties = Object.keys(newObject); 
console.log(findProperties);

// Object.assign = 
const objA = {
  a: 1,
  b: 5,
  d: 7
};

const objB = {
  b: 7,
  c: 9,
  d: 'hello'
}

// Object.assign(objA, objB);
Object.assign(objB, objA);
console.log(objA);
console.log(objB);

const journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television", "news"], // array with string
    public: false,
    views: 521,
    visitors: 12
  },
  {
    events: ["work", "football", "pizza", "running", "television", "news"], // array with string
    public: true,
    views: 101
  },
  {
    events: ["week", "holiday", "pizza", "running", "television", "news"], // array with string
    public: false,
    views: 12
  }
]; // array of objects

console.log(journal);
