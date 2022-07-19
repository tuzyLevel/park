function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie());

function greet(person, msg = "Hey there") {
  console.log(`${msg}, ${person}`);
}

greet("Hello", "Joaquin");

const feline = { legs: 4, family: "Femlidae" };
const canine = { isFurry: true, family: "Caninae" };

catDog = { ...feline, ...canine, family: "Steele" };
console.log(catDog);


{...[2, 4, 6, 8]}