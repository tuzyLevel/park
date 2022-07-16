const fs = require("fs").promises;

fs.copyFile("readme4.txt", "writeme4.txt")
  .then(() => {
    console.log("success copy");
  })
  .catch((err) => {
    console.error(err);
  });
