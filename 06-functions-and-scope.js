// 🔰 ฟังก์ชันและขอบเขตตัวแปร (Scope)

// ฟังก์ชันปกติ
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

// Arrow function
const isEven = (n) => n % 2 === 0;
console.log(isEven(6));

// Closure: ฟังก์ชันที่จำค่าภายนอกได้
function makeGreeting(name) {
  return function () {
    console.log(`Hello ${name}, welcome back!`);
  };
}
const greetMark = makeGreeting("Mark");
greetMark();

// Scope
let globalVar = "global";
function testScope() {
  let localVar = "local";
  console.log(globalVar); // เข้าถึงได้
  // console.log(localVar); // ใช้ข้างนอกไม่ได้
}
testScope();