const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().split(' ');

let year = Number(input[0]);

if(year % 4 === 0 && year % 100 !== 0){
    console.log(1);
}
else if(year % 400 === 0){
    console.log(1);
}
else{
    console.log(0);
}