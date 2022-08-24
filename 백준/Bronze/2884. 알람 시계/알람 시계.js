const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().split(' ');

const hour = Number(input[0]);
const minute = Number(input[1]);
const newMinute = minute + 15;
const new2Minute = minute - 45;
if(hour > 0 && minute < 45){
    console.log(`${hour - 1} ${newMinute}`)
}
else if(hour === 0 && minute < 45){
    console.log(`${23 - hour} ${newMinute}`)
}
else if(hour > 0 && minute > 45){
    console.log(`${hour} ${new2Minute}`);
}
else{
    console.log(`${hour} ${new2Minute}`);
}