
const score = 85;
const gradeCalculator = (score) => {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  return "F";
};
console.log(`Your grade is: ${gradeCalculator(score)}`);

const isLoggedIn = true;
const welcomeMessage = isLoggedIn ? "ยินดีต้อนรับ" : "กรุณาเข้าสู่ระบบ";
console.log(welcomeMessage);

const checkRole = (role) => {
  switch (role) {
    case "admin": return "เข้าถึงทุกอย่าง";
    case "user": return "เข้าถึงทั่วไป";
    case "guest": return "ดูได้อย่างเดียว";
    default: return "ไม่มีสิทธิ์เข้าใช้งาน";
  }
};
console.log(checkRole("admin"));
console.log(checkRole("user"));
console.log(checkRole("guest"));
console.log(checkRole("unknown"));
