let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = null;
let count = 1;
let msg = null;
while (true) {
  count += 1;
  guess = prompt(`guess the random number! ${msg ? msg : ""}`);
  if (guess === "q") break;
  guess = parseInt(guess);
  if (guess > targetNum) {
    msg = "Too high";
  } else if (guess === targetNum) {
    break;
  } else {
    msg = "Too low";
  }
}

if (guess === "q") {
  console.log("you quit");
} else {
  console.log(`you spend ${count} times`);
}
