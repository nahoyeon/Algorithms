const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split(' ');

let number = Number(input[0]);

let star = '';
for (let i = 0; i < number; i++) {
    for (let j = 0; j < number - i - 1; j++) {
    // for (let j = number - 1; j > i; j--) {
        star += ' ';
    }
    for (let k = 0; k <=i; k++) {
        star += '*';
    }
    star += '\n';
}

console.log(star);