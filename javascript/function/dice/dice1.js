function rollDie(size) {
  return Math.floor(Math.random() * size) + 1;
}

die1 = rollDie(16);
console.log(die1);
