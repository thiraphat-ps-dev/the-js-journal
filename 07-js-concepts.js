
console.log(nameVar); // undefined
var nameVar = "John";

try {
  console.log(nameLet);
} catch (e) {
  console.log("Error:", e.message);
}
let nameLet = "Mike";

const val = "";
console.log(val ? "✅ truthy" : "❌ falsy");

let x = 10;
function modify(val) { val = 99; }
modify(x);
console.log(x); // 10

const obj = { num: 5 };
function mutate(o) { o.num = 10; }
mutate(obj);
console.log(obj.num); // 10

const userObj = {
  name: "Neo",
  greet() { console.log(`Hello, ${this.name}`); }
};
userObj.greet();

const state = { score: 10 };
const nextState = { ...state, score: 99 };
console.log(state.score); // 10
console.log(nextState.score); // 99

function Animal() {}
Animal.prototype.speak = function() {
  console.log("สัตว์พูด!");
};
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function() {
  console.log("เห่า!");
};
const dog = new Dog();
dog.bark();
dog.speak();
