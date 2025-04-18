
const colors = ["red", "green", "blue"];
colors.push("yellow");
colors.pop();
console.info(colors.length);

const person = {
  name: "John Doe",
  age: 30,
  occupation: "Developer"
};
console.info(person.name);
console.info(person["age"]);
console.info(person.occupation);

const products = [
  { name: "Laptop", price: 30000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
];
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.info(totalPrice);
const filteredProducts = products.filter(product => product.price < 1000);
console.info(filteredProducts);
const productNames = products.map(product => product.name);
console.info(productNames);
