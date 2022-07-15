// console.log("BEFORE CONDITIONAL");
// let random = Math.random();
// if (random < 0.5) {
//   console.log("YOUR NUMBER IS LESS THAN 0.5");
// } else if (random === 0.5) {
//   console.log("YOUR NUMBER IS JUST 0.5!");
// } else {
//   console.log("YOUR NUMBER IS GREATER THAN 0.5");
// }
// console.log("AFTER CONDITIONAL");

// const dayOfWeek = "Monday";

// if (dayOfWeek === "Monday") {
//   console.log("UGHHHHHH I HATE MONDAYS!");
// } else if (dayOfWeek === "Saturday") {
//   console.log("YAY I LOVE SATURDAYS!");
// }

// const age = parseInt(prompt("Please enter a day"));

// if (age < 5) {
//   console.log("You are a baby, You get in for free!");
// } else if (age < 10) {
//   console.log("You are a child, You pay $10");
// } else if (age < 65) {
//   console.log("You are an adult. You pay $20");
// } else {
//   console.log("You are senior. You pay $ 10");
// }

const password = prompt("please enter a new password");

if (password.length >= 6) {
  console.log("LONG ENOUGH PASSWORD");
}
console.log(typeof password);

if (password.includes(" ")) {
  console.log("Oh you should remove space");
}
