const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');



for(let i = 0; i < input.length; i++){
    let num = input[i].split(' ').map(Number);

    console.log(num[0] + num[1]);
}