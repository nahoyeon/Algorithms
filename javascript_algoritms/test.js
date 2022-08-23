const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input =[];

readline.on('line', function(line) {
  input = line.split(' ').map(el => parseInt(el));
}).on('close', function() {

    process.exit();
});


// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().split(' ');