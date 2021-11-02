function createBoxes() {
  for (let i = 0; i < 256; i++) {
    const container = document.querySelector("#container");

    const box = document.createElement("div");
    box.textContent = "box";
    box.classList.add("new");
    container.appendChild(box);
  }
}

createBoxes();

const singleBox = document.querySelectorAll(".new");
singleBox.forEach((sBox) => {
  sBox.addEventListener("mouseenter", () => {
    //event.target.style.backgroundColor = "purple";
    // sBox.classList.remove("new");
    sBox.classList.toggle("colorTrail");
  });
});

singleBox.addEventListener("mouseenter", () => alert("Yeppidibity!"));

//// Works ver 2.1 using “on_event_” property with named function
// const mainBox = document.querySelector("#container");
// mainBox.onmouseenter = alertFunction;

// function alertFunction() {
//   alert("It works!");
// }

//// Works ver. 2.0 using “on_event_” property
// const mainBox = document.querySelector("#container");

// mainBox.onmouseenter = () => alert("It Works!");

//// Works ver 1.1 (anonymous arrow function)
// const mainBox = document.querySelector("#container");

// mainBox.addEventListener("mouseenter", () => {
//   alert("It works!");
// });

//// Works ver 1.0 (named function)
// const mainBox = document.querySelector("#container");

// mainBox.addEventListener("mouseenter", runThis);

// function runThis() {
//   alert("It works");
// }
