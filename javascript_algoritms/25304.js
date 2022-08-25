const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');

const totalPrice = Number(input[0]);
const count = Number(input[1]);

let sum = 0;
let arr = []; 
for(let i = 2; i <= count + 1; i++){
    arr = input[i].split(' ').map(Number); 
    sum += arr[0] * arr[1];
}
if(sum === totalPrice){
    console.log('Yes');
}
else{
    console.log('No');
}


