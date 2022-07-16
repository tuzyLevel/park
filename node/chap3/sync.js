const fs = require("fs");

console.log("start");

let data = fs.readFileSync("./readme2.txt");
console.log("1times", data.toString());

data = fs.readFileSync("./readme2.txt");
console.log("2times", data.toString());

data = fs.readFileSync("./readme2.txt");
console.log("3times", data.toString());

console.log("end");
