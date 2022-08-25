const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const count = input[0];

let arr = [];
for(let i = 1; i <= count; i++){
    arr = input[i].split(" ").map(Number);
    console.log(arr[0] + arr[1]);
}
