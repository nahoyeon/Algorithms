const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().split(' ');

const firstNum = Number(input[0]);
const secondNum = Number(input[1]);

if(firstNum > secondNum){
    console.log(">");
}
else if(firstNum < secondNum){
    console.log("<");
}
else{
    console.log("==");
}