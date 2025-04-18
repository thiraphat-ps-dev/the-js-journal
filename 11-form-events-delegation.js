// 🔰 11 - Form Events & Event Delegation

// ✅ การจัดการฟอร์มพื้นฐาน
const form = document.querySelector("#user-form");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // ป้องกันการ reload หน้า

  const name = nameInput.value;
  const age = ageInput.value;

  console.log("ชื่อ:", name);
  console.log("อายุ:", age);

  // ล้างค่า input
  nameInput.value = "";
  ageInput.value = "";
});

// ✅ Event Delegation: ใช้กับ element ที่ถูกสร้างภายหลัง
const list = document.querySelector("#item-list");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});

// เพิ่มรายการ
const addBtn = document.querySelector("#add-item-btn");
addBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "เพิ่มใหม่";
  list.appendChild(newItem);
});

// 📝 ตัวอย่าง HTML สำหรับทดสอบ
/*
<html>
  <head>
    <style>
      .done { text-decoration: line-through; color: gray; }
    </style>
  </head>
  <body>
    <form id="user-form">
      <input type="text" id="name" placeholder="ชื่อ" required />
      <input type="number" id="age" placeholder="อายุ" required />
      <button type="submit">ส่งข้อมูล</button>
    </form>

    <ul id="item-list">
      <li>รายการ 1</li>
      <li>รายการ 2</li>
    </ul>
    <button id="add-item-btn">เพิ่มรายการใหม่</button>

    <script src="11-form-events-delegation.js"></script>
  </body>
</html>
*/