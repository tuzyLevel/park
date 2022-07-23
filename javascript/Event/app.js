const btn = document.querySelector("#v2");
// btn.addEventListener("onclick", () => {
//   alert("you clicked me!!");
// });

// btn.onclick = () => {
//   alert("you clicked me!");
// };

function scream() {
  console.log("AHAAHAHAHAHAHHHAAA");
  console.log("STOP TOUCHING ME");
}

btn.onmouseenter = scream;

btn.addEventListener("click", () => {
  alert("stop!");
});

document.querySelector("h1").onclick = () => {
  alert("you clicked the h1!");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", () => {
  alert("clicked!");
});

function twist() {
  console.log("twist");
}

function shout() {
  console.log("shout");
}

const tasButton = document.querySelector("#tas");

tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout);
