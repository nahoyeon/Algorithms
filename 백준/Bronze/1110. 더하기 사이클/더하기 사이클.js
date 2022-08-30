const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split(' ');

const a = Number(input[0]);
let cnt = 0;
let num = a;

while (true) {
    let sum = parseInt(num%10 + num/10);
    num = (num%10)*10 + sum%10;
    cnt++;
    if (num === a) break;
}
console.log(cnt);