// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');

// let count = Number(input[0]);
// let arr = [];
// let max = 0;
// let sum = 0;

// for(let i = 1; i < count; i++){
//     arr = arr.input[1].split(' ').map(Number)
//     if(arr[0] > arr[i]){
//         max = arr[0]
//     }
//     else if(arr[0] < arr[i]){
//         max = arr[i]
//     }
//     sum += (arr[i] / max * 100)
// }
// console.log(sum / count);

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
const score = input[1].split(' ').map(Number);

score.sort((a, b) => b - a);

const m = score[0]; 
const newScore = score.map(score => score/m*100);

let sum = 0;
for(let i=0; i<n; i++){
    sum += newScore[i];
}
console.log(sum/n);