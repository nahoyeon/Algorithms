const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');

const count = input[0]; // 3
const arr = input[1].split(' ');
const max = Math.max(...arr);;
let sum = 0;

for (let i = 0; i < count; i++) {
    sum += (arr[i] / max * 100);
}

console.log(sum / count);

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// const n = input[0];
// const score = input[1].split(' ').map(Number);

// score.sort((a, b) => b - a);

// const m = score[0]; 
// const newScore = score.map(score => score/m*100);

// let sum = 0;
// for(let i=0; i<n; i++){
//     sum += newScore[i];
// }
// console.log(sum/n);