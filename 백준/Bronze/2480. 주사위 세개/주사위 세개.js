const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().split(' ');

const first = Number(input[0]);
const second = Number(input[1]);
const third = Number(input[2]);

const maxNum = Math.max(first, second, third);

if(first === second && first === third){
    console.log(10000 + (`${first}` * 1000));
}
else if(first === second || second === third || first === third){
    if(first === second || first === third){
        console.log(1000 + (`${first}` * 100));
    }
    else{
        console.log(1000 + (`${second}` * 100));
    }
}
else{
    console.log(`${maxNum}` * 100);
}