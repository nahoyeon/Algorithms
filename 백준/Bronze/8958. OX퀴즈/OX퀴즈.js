const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);

for(let i = 1; i <= n; i++){
    let count = 0;
    let sum = 0
    for(let j = 0; j <= input[i].length; j++){
        if(input[i][j] === 'O'){
            count++;
        }
        else{
            count = 0;
        }
        sum += count;
    }
    console.log(sum)
}