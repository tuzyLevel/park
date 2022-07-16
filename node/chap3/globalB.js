const A = require("./globalA");

globalThis.message = "Hello";
console.log(A());

if (global === globalThis) {
  console.log("same object");
}
