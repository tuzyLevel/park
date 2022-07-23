const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListsner("click", colorize);
}

function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}
