import { createInterface } from "readline";
function solveMeFirst(a: number, b: number) {
  return a + b;
}

const input = createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputs: string[] = [];
input.on("line", (line) => {
  inputs.push(line);
  if (inputs.length === 2) {
    const a = parseInt(inputs[0], 10);
    const b = parseInt(inputs[1], 10);
    console.log(solveMeFirst(a, b));
    input.close();
  }
});
