const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().split('\n');

const now = input[0].split(' ').map(Number);

const nowHour = now[0];
const nowMinute = now[1];
const loadingMinute = Number(input[1]);

const finishHour = parseInt((nowHour * 60 + nowMinute + loadingMinute) / 60);
const finishMinute = parseInt((nowHour * 60 + nowMinute + loadingMinute) % 60);

console.log(finishHour >= 24 ? finishHour - 24 : finishHour, finishMinute);

