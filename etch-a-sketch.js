function boxes() {
  for (let i = 0; i < 256; i++) {
    const container = document.querySelector("#container");

    const box = document.createElement("div");
    box.textContent = "box";
    box.classList.add("new");
    container.appendChild(box);
  }
}

boxes();

// const trailStart = document.querySelector("div");

function trail() {
  const box = document.querySelector("#container");
  box.addEventListener("mouseenter", (box.style.backgroundColor = "blue"));
}
trail();
// function trailStart() {
//   document.getElementsByClassName("test").style["background-color: purple"];
// }

// document.getElementsByClassName("test").onmouseenter = function () {
//   trailStart();
// };
