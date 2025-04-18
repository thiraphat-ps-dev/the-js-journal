
const add = (a, b) => a + b;
console.log(add(5, 3));

const isEven = (n) => n % 2 === 0;
console.log(isEven(6));

function makeGreeting(name) {
  return function () {
    console.log(`Hello ${name}, welcome back!`);
  };
}
const greetMark = makeGreeting("Mark");
greetMark();
