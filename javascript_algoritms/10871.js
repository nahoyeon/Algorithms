const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');

let numberCount = input[0].split(' ').map(Number);
let numbers = input[1].split(' ').map(Number);

let result = [];

for(let i = 0; i < numberCount[0]; i++){
    if(numberCount[1] > numbers[i]){
        result.push(numbers[i])
    }
}
console.log(result.join(' '));