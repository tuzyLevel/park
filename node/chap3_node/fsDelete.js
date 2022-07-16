const fs = require("fs").promises;

fs.readdir("./folder")
  .then((dir) => {
    console.log("check folder : ", dir);
    return fs.unlink("./folder/newfile.js");
  })
  .then(() => {
    console.log("success deleting file");
    return fs.rmdir("./folder");
  })
  .then(() => {
    console.log("success deleting folder");
  })
  .catch((err) => {
    console.error(err);
  });
