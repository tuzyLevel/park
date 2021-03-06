const timeout = setTimeout(() => {
  console.log("execute after 1.5 seconds");
}, 1500);

const interval = setInterval(() => {
  console.log("execute this sentence every 1 seconds interval");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("do not execute");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2); //delete timeout2
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log("do right now!");
});

const immediate2 = setImmediate(() => {
  console.log("do not execute");
});

clearImmediate(immediate2);
