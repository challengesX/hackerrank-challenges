const { createInterface } = require("readline");

function solveMeFirst(a, b) {
  return a + b;
}

const input = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
input.on("line", (line) => {
  inputs.push(line);
  if (inputs.length === 2) {
    const a = parseInt(inputs[0], 10);
    const b = parseInt(inputs[1], 10);
    console.log(solveMeFirst(a, b));
    input.close();
  }
});
