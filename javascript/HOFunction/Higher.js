// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(func) {
//   for (let i = 0; i < 10; i++) {
//     func();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTenTimes(rollDie);

// function MakeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("CONGRATS, I AM A GOOD FUNCTION!");
//     };
//   } else {
//     return function () {
//       alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS");
//     };
//   }
// }

// console.log(MakeMysteryFunc());

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

console.log(makeBetweenFunc(5, 10)(5));

function isBetween(num) {
  return num >= 50 && num <= 100;
}

const isChild = makeBetweenFunc(0, 18);
console.log(isChild(19));
