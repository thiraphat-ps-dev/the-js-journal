// 🔰 การใช้งาน Array และ Object

// Array
const colors = ["red", "green", "blue"];
colors.push("yellow"); // เพิ่มท้าย
colors.pop();          // ลบท้าย
console.info(colors.length); // ความยาว array

// Object
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Developer"
};
console.info(person.name);         // เข้าถึง property
console.info(person["age"]);
console.info(person.occupation);

// Array of Objects และ method ต่าง ๆ
const products = [
  { name: "Laptop", price: 30000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
];

// คำนวณราคารวม
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.info(totalPrice);

// กรองสินค้าราคาต่ำกว่า 1,000
const filteredProducts = products.filter(product => product.price < 1000);
console.info(filteredProducts);

// ดึงชื่อสินค้า
const productNames = products.map(product => product.name);
console.info(productNames);