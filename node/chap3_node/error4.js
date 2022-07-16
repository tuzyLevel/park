process.on("uncaughtException", (err) => {
  console.error("예기치 못한 에러", err);
});

setInterval(() => {
  throw new Error("I will break the server");
}, 1000);

setTimeout(() => {
  console.log("실행됩니다.");
}, 2000);


