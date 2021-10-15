function boxes() {
  for (let i = 0; i < 256; i++) {
    const container = document.querySelector("#container");

    const box = document.createElement("div");
    box.textContent = "box";

    container.appendChild(box);
  }
}

boxes();

// const box1 = document.createElement("div");
// box1.textContent = "box";

// container.appendChild(box1);

// const box2 = document.createElement("div");
// box2.textContent = "box";

// container.appendChild(box2);
