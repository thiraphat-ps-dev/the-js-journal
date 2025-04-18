// 🔰 09 - DOM & Events เบื้องต้น

// ✅ เข้าถึง element จาก DOM
const heading = document.getElementById("main-title");
console.log(heading); // แสดง <h1> ที่มี id="main-title"

// ✅ ใช้ querySelector (เลือก element แบบ CSS)
const btn = document.querySelector("#my-button");
const input = document.querySelector("input");

// ✅ เปลี่ยนข้อความภายใน element
heading.textContent = "เปลี่ยนชื่อหัวข้อแล้ว!";
heading.style.color = "red";

// ✅ เพิ่ม class
heading.classList.add("highlight");

// ✅ สร้าง element ใหม่และเพิ่มเข้าไปใน <ul>
const newItem = document.createElement("li");
newItem.textContent = "รายการใหม่";
document.querySelector("ul").appendChild(newItem);

// ✅ ลบ element (ถ้าต้องการ)
// newItem.remove();

// ✅ การจัดการ event: click
btn.addEventListener("click", () => {
  alert("คลิกแล้วจ้า!");
});

// ✅ การจัดการ event: input
input.addEventListener("input", (e) => {
  console.log("พิมพ์มา:", e.target.value);
});

// 📝 ตัวอย่าง HTML สำหรับทดสอบ
/*
<html>
  <head>
    <style>
      .highlight { color: orange; font-weight: bold; }
    </style>
  </head>
  <body>
    <h1 id="main-title">หัวข้อหลัก</h1>
    <input type="text" placeholder="พิมพ์อะไรสักอย่าง..." />
    <button id="my-button">คลิกฉัน</button>
    <ul>
      <li>รายการที่ 1</li>
    </ul>
    <script src="09-dom-and-events.js"></script>
  </body>
</html>
*/