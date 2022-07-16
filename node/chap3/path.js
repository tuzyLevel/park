const path = require("path");

const string = __filename;
console.log(string);

console.log("path.sep", path.sep); //seperator
console.log("path.delimiter: ", path.delimiter);
console.log("---------------------------");
console.log("path.dirname(): ", path.dirname(string)); // 파일이 있는 디렉터리 경로
console.log("path.extname(): ", path.extname(string)); // 확장자
console.log("path.basename(): ", path.basename(string)); // 파일명+확장자
console.log(
  "path.basename - extname : ",
  path.basename(string, path.extname(string))
); //파일명 - 확장자(순수한 파일 이름)

console.log("=-=-=-==-==-==-=-==-=");
console.log("path.parse()", path.parse(string)); // 파일 정보를 기준점에 따라 parsing해서 돌려줌
console.log("path.format(): ", path.format(path.parse(string)));

console.log("path.normalize(): ", path.normalize(string)); // 경로 구분자 / 를 여러번 썼을 경우 정상적인 경로로 변환해서 반환

console.log("path.isAbsolute(C:\\)", path.isAbsolute("/"));
console.log("path.isAbsolute(./home)", path.isAbsolute("./home"));

console.log("=-=-=-==-==-==-=-==-=");
console.log(
  "path.relative(): ",
  path.relative("/Users/ParkGoEun/Desktop/PracticeOfCoding", "/Users")
);

console.log(
  "path.join(): ",
  path.join(__dirname, "..", "..", "/users", ".", "/zerocho")
);

console.log(
  "path.resolve(): ",
  path.resolve(__dirname, "..", "/users", ".", "/zerocho")
);
