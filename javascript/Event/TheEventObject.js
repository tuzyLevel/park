document.querySelector("button").addEventListener("click", (event) => {
  console.log(event);
});

const input = document.querySelector("input");
input.addEventListener("keydown", (event) => {
  console.log(event.key);
  console.log(event.code);
});
// input.addEventListener("keyup", (event) => {
//   console.log("KEYUP");
// });
