// function collectionEgg() {
//   let totalEggs = 6;
//   console.log(totalEggs);
// }

// let bird = "Scarlet Macaw";
// function birdWatch() {
//   let bird = "Greate Blue Heron";
//   console.log(bird);
// }

// birdWatch();
// console.log(bird);

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = "HiIII!";
// }

// console.log(radius);
// console.log(PI);

function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther"];
  function cryForHelp() {
    function inner() {
      for (let hero of heroes) {
        console.log(`Please help us, ${hero.toUpperCase()}`);
      }
    }
    inner();
  }
  cryForHelp();
}
bankRobbery();

const add = function (x, y) {
  return x + y;
};

console.log(add(2, 3));
