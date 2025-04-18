// 🔰 การวนซ้ำใน JavaScript

const nums = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// for...of (ใช้กับ array)
for (let num of nums) {
  console.log(num);
}

// for...in (ใช้กับ object)
const user = { name: "John", age: 30 };
for (let key in user) {
  console.log(key, user[key]);
}

// while loop
let i = 0;
while (i < 3) {
  console.log("รอบที่", i);
  i++;
}