const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split(' ');

let str = input.toString();
result = str.charCodeAt(0);

console.log(result);
