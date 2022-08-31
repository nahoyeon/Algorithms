const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');

let count = Number(input[0]);

let arr = [];
arr = input[1].split(' ').map(Number); //arr[0] = 20,  arr[1] = 10, arr[2] = 35, arr[3] = 30; arr[4] = 7
let max = arr[0];
let min = arr[0];

for(let i = 1; i < count; i++){
    if(max < arr[i]){
        max = arr[i]
    }
    else if(min > arr[i]){
        min = arr[i]
    }
}
console.log(`${min} ${max}`);
