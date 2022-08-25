const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().split('\n');

let count = Number(input[0]);
let answer = '';

for (let i = 1; i <= count; i++) {
    let num = input[i].split(' ').map(Number);
    answer += num[0] + num[1] + '\n';
}

console.log(answer);