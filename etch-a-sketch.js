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

// deletes set of boxes
function deleteBoxes() {
  const boxes = document.querySelectorAll(".new");
  boxes.forEach((box) => {
    box.remove();
  });

  // const box = document.querySelectorAll(".new");
  // for (let i = 0; i < box.length; i++) {
  //   box.remove();
  // }
}

deleteBoxes();

// upon mouseenter changes each box to a static color
const singleBox = document.querySelectorAll(".new");

singleBox.forEach((sBox) => {
  sBox.addEventListener("mouseenter", () => {
    sBox.classList.add("colorTrail");
  });
});

// button for reseting
const reset = document.querySelector("#reset-btn");

singleBox.forEach((sBox) => {
  reset.addEventListener("click", () => {
    sBox.classList.remove("colorTrail");
  });
});

// button for prompt

const user = document.querySelector("#prompt-btn");

let userValue;

user.addEventListener("click", () => {
  let userValue = prompt(
    "Please enter a number less than 100 to generate a new set of tiles"
  );
  if (userValue > 0 && userValue <= 100) {
    createBoxes();
  } else {
    alert("Please Enter a number between 1 and 100");
  }
});
