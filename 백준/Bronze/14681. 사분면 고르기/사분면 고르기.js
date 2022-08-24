const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

let firstNum = Number(input[0]);
let secondNum = Number(input[1]);

if(firstNum > 0 && secondNum > 0){
    console.log(1);
}
else if(firstNum < 0 && secondNum > 0){
    console.log(2);
}
else if(firstNum < 0 && secondNum < 0){
    console.log(3);
}
else{
    console.log(4);
}