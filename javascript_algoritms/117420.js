const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');

let num = Number(input[0]);
let num2 = input[1].split("");
let sum = 0;

for (let i = 0; i < num; i++) {
    sum += Number(num2[i]);
}

console.log(sum);