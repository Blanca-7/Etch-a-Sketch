// creates default set of tiles 16x16
function createDefaultBoxes() {
  for (let i = 0; i < 5; i++) {
    const container = document.querySelector("#container");

    const cells = document.createElement("div");
    cells.classList.add("new");
    for (let j = 0; j < 5; j++) {
      const box = document.createElement("div");
      box.classList.add("actualBox");
      cells.appendChild(box);
    }
    container.appendChild(cells);
  }
}

createDefaultBoxes();
coloredBoxes();
resetButton();

// creates custom set of tiles flex-direction: row
function createUserBoxes(userValue) {
  for (let i = 0; i < userValue; i++) {
    const container = document.querySelector("#container");

    const rows = document.createElement("div");
    rows.classList.add("new");
    container.appendChild(rows);
  }
}

// deletes set of boxes using forEach
function deleteBoxes() {
  const boxes = document.querySelectorAll(".actualBox");
  boxes.forEach((box) => {
    box.remove();
  });
}

// deletes set of boxes using for/of
// function deleteBoxes() {
//   const boxes = document.querySelectorAll(".new");
//   for (let box of boxes) {
//     box.remove();
//   }
// }

// deletes set of boxes using for-loop
// function deleteBoxes() {
//   const boxes = document.querySelectorAll(".new");
//   for (let i = 0; i < boxes.length; i++) {
//     boxes[i].remove();
//   }
// }
// upon mouseenter, changes each box to a static color

function coloredBoxes() {
  const singleBox = document.querySelectorAll(".actualBox");

  singleBox.forEach((sBox) => {
    sBox.addEventListener("mouseenter", () => {
      sBox.classList.add("colorTrail");
    });
  });
}
// button for reseting/clear
function resetButton() {
  const resetButton = document.querySelector("#reset-btn");
  const singleBox = document.querySelectorAll(".actualBox");

  singleBox.forEach((sBox) => {
    resetButton.addEventListener("click", () => {
      sBox.classList.remove("colorTrail");
    });
  });
}

// button for prompt

const user = document.querySelector("#prompt-btn");

user.addEventListener("click", userPrompt);

function userPrompt() {
  let userValue = prompt(
    "Please enter a number less than 100 to generate a new set of tiles"
  );
  if (userValue > 0 && userValue <= 225) {
    deleteBoxes();
    createUserBoxes(userValue);
    coloredBoxes();
    resetButton();
  } else {
    alert("Please Enter a number between 1 and 100");
  }
}
