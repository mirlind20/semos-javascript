
function square (x) { // () => set of parameters 
  // body, function body (statements that are to be executed when the func is called)
  const power = x * x;
  console.log('power of X', power);
  const powerPow = Math.pow(power, 2);  // x * x, x ** 2
  console.log('pow of powerPow', powerPow);
  return power;
} // only a single statement

console.log(square(12)); // 16


const sum = function (x, y, z) {
  return (x + y) * z;
}

console.log('Sum is', sum(2, 3, 2));

const makeNoise = function () {
  console.log('Hello');
};

console.log(makeNoise());

const halve = function (n) {
  return n / 2;
}

console.log(halve("22")); // "22" == 22 => result 11
console.log(halve(22)); // 11