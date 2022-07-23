let fs = require("fs");
let input = fs.readFileSync("./codingTest/test.txt").toString().split(" ");

let numbers = input.map((x) => {
  return parseInt(x);
});
