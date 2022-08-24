const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().split(' ');

let number = Number(input[0]);

if(90 <= number && number <= 100){
    console.log("A");
}
else if(80 <= number && number <= 89){
    console.log("B");
}
else if(70 <= number && number <= 79){
    console.log("C");
}
else if(60 <= number && number <= 69){
    console.log("D");
}
else{
    console.log("F");
}