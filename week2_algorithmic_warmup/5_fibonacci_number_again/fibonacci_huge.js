// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  if (line !== "\n") {
    const n = parseInt(line.toString().split(" ")[0], 10);
    const m = parseInt(line.toString().split(" ")[1], 10);

    console.log(getFibMod(n, m));
    process.exit();
  }
}
function get_pisano_period(m) {
  if (m === 0) {
    return m;
  }
  //pisano start with 0,1
  let last = 1;
  let second_last = 0;
  for (let i = 0; i < m * m; i++) {
    let next = (last + second_last) % m;
    second_last = last;
    last = next;
    if (second_last === 0 && last === 1) {
      return i + 1;
    }
  }
}

function getFibMod(n, m) {
  // write your code here
  pisano_len = get_pisano_period(m);
  pisano_reminder = n % pisano_len;
  let last = 1;
  let second_last = 0;
  let fib = pisano_reminder;
  for (let i = 1; i < pisano_reminder; i++) {
    fib = (last + second_last) % m;
    last = second_last;
    second_last = fib;
  }
  return fib % m;
}

module.exports = getFibMod;
