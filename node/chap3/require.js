console.log("do not exists on top the require");

module.exports = "find me!";

require("./var");

console.log("require.cache");
console.log(require.cache);
console.log("require.main");
console.log(require.main);
console.log(require.main === module);
console.log(require.main.filename);
