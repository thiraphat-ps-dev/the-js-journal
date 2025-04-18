// 🔰 10 - LocalStorage & Fetch API

// ✅ LocalStorage: การเก็บข้อมูลลง browser

// บันทึกข้อมูล
localStorage.setItem("username", "JohnDoe");

// ดึงข้อมูล
const storedName = localStorage.getItem("username");
console.log("ชื่อจาก localStorage:", storedName);

// ลบข้อมูล
// localStorage.removeItem("username");

// ล้างข้อมูลทั้งหมด
// localStorage.clear();


// ✅ Fetch API: ดึงข้อมูลจาก server (เช่น JSON API)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // แปลงผลลัพธ์เป็น JSON
  .then((data) => {
    console.log("ข้อมูลที่ได้จาก API:", data);
  })
  .catch((error) => {
    console.error("เกิดข้อผิดพลาด:", error);
  });

// ✅ Async/Await version
async function loadPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const data = await res.json();
    console.log("ข้อมูลแบบ async:", data);
  } catch (err) {
    console.error("error:", err);
  }
}
loadPost();