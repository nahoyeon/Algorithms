let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => Number(x));
let numArr = [];

input.forEach(x => {
const num = x % 42;

if(numArr.indexOf(num) === -1) { 
    numArr.push(num);             
}
});

console.log(numArr.length);