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
  let prev_digits = [0, 1];
  while (prev_digits.length <= n) {
    let next_digit = (prev_digits.slice(-2, -1) + prev_digits.slice(-1)) % 10;
    prev_digits.push(next_digit);
  }
  return prev_digits.slice(-1);
}

module.exports = fib;
