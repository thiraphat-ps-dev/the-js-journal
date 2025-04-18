// 🔰 ตัวแปรและชนิดข้อมูลใน JavaScript

// String (ข้อความ)
const myName = "John Doe";

// Number (ตัวเลข)
const myAge = 30;

// Boolean (จริง/เท็จ)
const isCool = true;

// Undefined (ยังไม่ถูกกำหนดค่า)
const goals = undefined;

// Null (ค่าที่ตั้งใจให้ว่างเปล่า)
const hobbies = null;

// Symbol (ค่าที่ไม่ซ้ำกัน)
const id = Symbol('id');

// BigInt (ตัวเลขขนาดใหญ่)
const bigInt = 1234567890123456789012345678901234567890n;

// ตรวจสอบชนิดข้อมูล
console.log(typeof myName); 
console.log(typeof myAge); 
console.log(typeof isCool); 
console.log(typeof goals); 
console.log(typeof hobbies); 
console.log(typeof id); 
console.log(typeof bigInt); 

// การเปรียบเทียบ null กับ undefined
console.info(null == undefined);  // ✅ เท่ากันเมื่อใช้ ==
console.info(null === undefined); // ❌ ไม่เท่ากันเมื่อใช้ === (เปรียบเทียบชนิดด้วย)