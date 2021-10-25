function createBoxes() {
  for (let i = 0; i < 256; i++) {
    const container = document.querySelector("#container");

    const box = document.createElement("div");
    box.textContent = "box";
    box.classList.add("new");
    container.appendChild(box);
  }
}

// createBoxes();

//// Works ver 1.1 (anonymous arrow function)
// const mainBox = document.querySelector("#container");

// mainBox.addEventListener("mouseenter", () => {
//   alert("It works!");
// });

//// Works ver 1.0 !! (named function)
// const mainBox = document.querySelector("#container");

// mainBox.addEventListener("mouseenter", runThis);

// function runThis() {
//   alert("It works");
// }
