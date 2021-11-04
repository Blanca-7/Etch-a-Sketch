// creates 16x16 = 256 boxes total
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

// upon mouseenter changes each box to a static color
const singleBox = document.querySelectorAll(".new");
singleBox.forEach((sBox) => {
  sBox.addEventListener("mouseenter", () => {
    sBox.classList.add("colorTrail");
  });
});

const btn = document.querySelector("#btn");

singleBox.forEach((sBox) => {
  btn.addEventListener("click", () => {
    sBox.classList.remove("colorTrail");
  });
});
