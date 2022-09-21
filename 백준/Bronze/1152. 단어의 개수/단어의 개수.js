const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString();

let newArr = input.trim().split(' ');
let countwords = 0;

for(let i = 0; i < newArr.length; i++){
    if(newArr[i] !== ''){
        countwords += 1;
    }
}
console.log(countwords);