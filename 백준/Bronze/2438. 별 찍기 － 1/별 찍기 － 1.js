const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split(' ');

const number = Number(input[0]);

let star = "";

for(let i = 1; i <= number; i++){
    star += "*"
    console.log(star);
}