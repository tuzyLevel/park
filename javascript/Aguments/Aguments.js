// function sum() {
//   return arguments.
// }

// sum(1);

function sum(...nums) {
  return nums.reduce((acc, element) => acc + element);
}

console.log(sum(1, 2, 3));

function raceResult(gold, silver, ...others) {}
