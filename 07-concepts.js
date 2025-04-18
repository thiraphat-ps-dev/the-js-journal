// 🔰 JavaScript Concepts

// Hoisting
console.log(nameVar); 
var nameVar = "John"; // โอเค

try {
  console.log(nameLet); // ❌ error
} catch (e) {
  console.log("Error:", e.message);
}
let nameLet = "Mike";

// Truthy / Falsy
const val = "";
console.log(val ? "✅ truthy" : "❌ falsy");

// Pass by Value / Reference
let x = 10;
function modify(val) { val = 99; }
modify(x);
console.log(x); // ยังเป็น 10

const obj = { num: 5 };
function mutate(o) { o.num = 10; }
mutate(obj);
console.log(obj.num); // 10

// this และ context
const userObj = {
  name: "Neo",
  greet() { console.log(`Hello, ${this.name}`); }
};
userObj.greet();

// prototype & inheritance
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