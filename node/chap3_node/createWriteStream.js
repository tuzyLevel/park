const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt");

writeStream.on("finish", () => {
  console.log("finish writing");
});

writeStream.write("write this line \n");
writeStream.write("more line");
writeStream.end();
