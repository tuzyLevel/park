const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    indside: {
      key: "value",
    },
  },
};

console.time("whole time");
console.log("normal log");

console.error("this is the error message");
console.table([
  { name: "zero", birth: 1994 },
  { name: "hero", birth: 1988 },
]);
console.dir(obj, { color: false, depth: 2 });
console.dir(obj, { color: true, depth: 1 });

console.time("time estimate");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("time estimate");

function b() {
  console.trace("chase the error");
}

function a() {
  b();
}

a();

console.timeEnd("whole time");
