const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);

let thirdNum = b % 10;
let secondNum = Math.floor((b % 100) / 10);
let firstNum = Math.floor(b / 100);

console.log(a * thirdNum);
console.log(a * secondNum);
console.log(a * firstNum);
console.log(a * b);