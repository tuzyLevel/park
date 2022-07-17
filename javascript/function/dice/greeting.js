function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName}`);
}

greet("George", "Clooney");

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  return result;
}

console.log(repeat("hi", 5));
