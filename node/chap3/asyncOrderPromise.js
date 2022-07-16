const { readFile } = require("fs");

const fs = require("fs").promises;

console.log("start");

fs.readFile("./readme2.txt")
  .then((data) => {
    console.log("1times ", data.toString());
    return fs.readFile("./readme2.txt");
  })
  .then((data) => {
    console.log("2times ", data.toString());
    return fs.readFile("./readme2.txt");
  })
  .then((data) => {
    console.log("3times ", data.toString());
    console.log("end");
  })
  .catch((error) => {
    console.error(error);
  });
