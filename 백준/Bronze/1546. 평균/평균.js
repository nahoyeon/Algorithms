const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');

const count = input[0]; // 3
const arr = input[1].split(' ');
const max = Math.max(...arr);
let sum = 0;

for (let i = 0; i < count; i++) {
    sum += (arr[i] / max * 100);
}

console.log(sum / count);