function setText() {
  let paras = document.querySelector("span");
  paras.innerText = "affordable";
}

function setText2() {
  let paras = document.querySelector("span");
  paras.innerText = "accessible";
}

setInterval(() => {
  setText();
}, 3000);

setInterval(() => {
  setText2();
}, 6000);
