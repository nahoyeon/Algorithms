const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const maxNum = Math.max(...input);
const indexNum = input.indexOf(maxNum);

console.log(maxNum);
console.log(indexNum + 1);




// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().split('\n');

// let max = Number(input[0]);
// let num = Number(input[i]);
// let maxIdx = 0;
// for(let i = 1; i < 9; i++){
//     if(max < num){
//         max = num;
//         maxIdx = i;
//     }
// }
// console.log(max);
// console.log(maxIdx + 1);