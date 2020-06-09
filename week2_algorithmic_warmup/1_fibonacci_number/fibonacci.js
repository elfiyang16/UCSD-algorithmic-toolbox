// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(fib(parseInt(line, 10)));
  process.exit();
}

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  let current = 1;
  let previous = 0;
  for (i = 2; i < n + 1; i++) {
    let updated = current + previous;
    previous = current;
    current = updated;
    return updated;
  }
}

module.exports = fib;
