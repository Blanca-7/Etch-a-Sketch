// creates 16x16 = 256 boxes total
function createBoxes(userValue) {
  for (let i = 0; i < userValue; i++) {
    const container = document.querySelector("#container");

    const box = document.createElement("div");
    box.textContent = "box";
    box.classList.add("new");
    container.appendChild(box);
  }
}

createBoxes(prompt("Enter a number of boxes to create"));
coloredBoxes();

// deletes set of boxes
function deleteBoxes() {
  const boxes = document.querySelectorAll(".new");
  boxes.forEach((box) => {
    box.remove();
  });
}
// const box = document.querySelectorAll(".new");
// for (let i = 0; i < box.length; i++) {
//   box.remove();
// }

// deleteBoxes();

// upon mouseenter changes each box to a static color

function coloredBoxes() {
  const singleBox = document.querySelectorAll(".new");

  singleBox.forEach((sBox) => {
    sBox.addEventListener("mouseenter", () => {
      sBox.classList.add("colorTrail");
    });
  });
}
// button for reseting/clear
const singleBox = document.querySelectorAll(".new");
const reset = document.querySelector("#reset-btn");

singleBox.forEach((sBox) => {
  reset.addEventListener("click", () => {
    sBox.classList.remove("colorTrail");
  });
});

// button for prompt

const user = document.querySelector("#prompt-btn");

user.addEventListener("click", () => {
  let userValue = prompt(
    "Please enter a number less than 100 to generate a new set of tiles"
  );
  if (userValue > 0 && userValue <= 100) {
    deleteBoxes(); // bug persists, when creating a new set of tiles with prompt, unable to clear colors
    createBoxes(userValue);
    coloredBoxes();
  } else {
    alert("Please Enter a number between 1 and 100");
  }
});
