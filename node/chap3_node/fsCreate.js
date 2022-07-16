const fs = require("fs").promises;

const constants = require("fs").constants;

fs.access("./folder", constants.F_OK | constants.W_OK | constants.R_OK)
  .then(() => {
    return Promise.reject("이미 폴더 있음");
  })
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log("Not exists folder");
      return fs.mkdir("./folder");
    }
    return Promise.reject(err);
  })
  .then(() => {
    console.log("success making folder");
    return fs.open("./folder/file.js", "w");
  })
  .then((fd) => {
    console.log("빈 파일 만들기 성공!", fd);
    return fs.rename("./folder/file.js", "./folder/newfile.js");
  })
  .then(() => {
    console.log("success to change name");
  })
  .catch((err) => {
    console.error(err);
  });
