let defaultBoxes = 16;

// creates default set of tiles 16x16
function createDefaultBoxes() {
  for (let i = 0; i < defaultBoxes; i++) {
    const container = document.querySelector("#container");

    const cells = document.createElement("div");
    cells.classList.add("new");
    for (let j = 0; j < defaultBoxes; j++) {
      const box = document.createElement("div");
      box.classList.add("actualBox");
      cells.appendChild(box);
    }
    container.appendChild(cells);
  }
}

createDefaultBoxes();
coloredBoxesButton();
randomColorButton();
resetButton();

// creates custom set of tiles flex-direction: row
function createUserBoxes(userValue) {
  for (let i = 0; i < userValue; i++) {
    const container = document.querySelector("#container");

    const cells = document.createElement("div");
    cells.classList.add("new");

    for (let j = 0; j < userValue; j++) {
      const box = document.createElement("div");
      box.classList.add("actualBox");
      cells.appendChild(box);
    }
    container.appendChild(cells);
  }
}

// deletes set of boxes using forEach
function deleteBoxes() {
  const boxes = document.querySelectorAll(".new");
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
      sBox.style.backgroundColor = ""; // removes RGB inline styling
      sBox.classList.add("colorTrail");
    });
  });
}

function coloredBoxesButton() {
  const singleColorButton = document.querySelector("#fixed-Color");
  singleColorButton.addEventListener("click", coloredBoxes);
}

function randomColor() {
  const singleBox = document.querySelectorAll(".actualBox");

  singleBox.forEach((sBox) => {
    sBox.addEventListener("mouseenter", () => {
      let randomRgbValue = Math.floor(Math.random() * 16777215).toString(16);
      let randomRgbColor = "#" + randomRgbValue;
      sBox.style.backgroundColor = randomRgbColor;
    });
  });
}

function randomColorButton() {
  const randomButton = document.querySelector("#random-RGB");
  randomButton.addEventListener("click", randomColor);
}

// button for reseting/clear
function resetButton() {
  const resetButton = document.querySelector("#reset-btn");
  const singleBox = document.querySelectorAll(".actualBox");

  // resets the static color from CSS
  singleBox.forEach((sBox) => {
    resetButton.addEventListener("click", () => {
      sBox.classList.remove("colorTrail");
    });
  });
  // resets the random RGB color from inline
  singleBox.forEach((sBox) => {
    resetButton.addEventListener("click", () => {
      sBox.style.removeProperty("background-color"); // or sBox.style.backgroundColor = "";
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
  if (userValue > 0 && userValue <= 100) {
    deleteBoxes();
    createUserBoxes(userValue);
    coloredBoxes();
    resetButton();
  } else {
    alert("Please Enter a number between 1 and 100");
  }
}
