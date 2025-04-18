
function greet(name, callback) {
  console.log("กำลังเตรียมคำทักทาย...");
  callback(name);
}
function sayHello(name) {
  console.log(`สวัสดี ${name}!`);
}
greet("John", sayHello);

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("ข้อมูลจากเซิร์ฟเวอร์"), 1000);
  });
};
const loadData = async () => {
  console.log("รอข้อมูล...");
  const result = await fetchData();
  console.log(result);
};
loadData();
