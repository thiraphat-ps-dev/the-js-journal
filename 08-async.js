// 🔰 Async JavaScript

// Callback
function greet(name, callback) {
  console.log("กำลังเตรียมคำทักทาย...");
  callback(name);
}
greet("John", (n) => console.log(`สวัสดี ${n}!`));

// Promise
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("ข้อมูลจากเซิร์ฟเวอร์"), 1000);
  });
};

// Async/Await
const loadData = async () => {
  console.log("รอข้อมูล...");
  const result = await fetchData();
  console.log(result);
};
loadData();