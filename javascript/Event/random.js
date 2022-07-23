function changeH1(newRGB) {
  let h1 = document.querySelector("#rgb");
  h1.innerHTML = newRGB;
}

function genNewRGB() {
  const rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256));
  }
  let newRGB = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  return newRGB;
}

function changeBodyBGC(newRGB) {
  document.body.style.backgroundColor = newRGB;
}

function changeRGBBtnCB() {
  let newRGB = genNewRGB();
  changeH1(newRGB);
  changeBodyBGC(newRGB);
}

function main() {
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", changeRGBBtnCB);
}

main();
