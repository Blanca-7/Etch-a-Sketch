let defaultBoxes = 16;

// creates default set of tiles 16x16
function createDefaultBoxes() {
  for (let i = 0; i < defaultBoxes; i++) {
    const container = document.querySelector("#container");

    const cells = document.createElement("div");
    cells.classList.add("row");
    for (let j = 0; j < defaultBoxes; j++) {
      const box = document.createElement("div");
      box.classList.add("actualBox");
      cells.appendChild(box);
    }
    container.appendChild(cells);
  }
}

createDefaultBoxes();
singleColor();
randomColorButton();
gradientButton();

resetButton();

// creates custom set of tiles flex-direction: row
function createUserBoxes(userValue) {
  for (let i = 0; i < userValue; i++) {
    const container = document.querySelector("#container");

    const cells = document.createElement("div");
    cells.classList.add("row");

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
  const boxes = document.querySelectorAll(".row");
  boxes.forEach((box) => {
    box.remove();
  });
}

function coloredBoxes() {
  const singleBox = document.querySelectorAll(".actualBox");

  singleBox.forEach((sBox) => {
    sBox.addEventListener("mouseenter", () => {
      sBox.style.backgroundColor = ""; // removes RGB inline styling
      sBox.classList.add("colorTrail");
    });
  });
}

//coloredBoxes, darkenTenTimes

function singleColor() {
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
  randomButton.addEventListener("click", () => {
    randomColor();
    darkenTenTimes();
  });
}

// button for resetting/clear
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
  // resets brightness back to 100%
  singleBox.forEach((sBox) => {
    resetButton.addEventListener("click", () => {
      sBox.style.removeProperty("filter");
      // darkenTenTimes();
    });
  });
}

function gradientButton() {
  const gradientBtn = document.querySelector("#checkbox-1");
  gradientBtn.addEventListener("click", () => {
    if (gradientBtn.checked) {
      darkenTenTimes();
    }
  });
}

function darkenTenTimes() {
  const darken = document.querySelectorAll(".actualBox");

  darken.forEach((box) => {
    let i = 110;
    box.addEventListener("mouseenter", () => {
      box.style.filter = `brightness(${i}%)`;
      i -= 10;
    });
  });
}

// button for prompt
const user = document.querySelector("#prompt-btn");

user.addEventListener("click", userPrompt);

function userPrompt() {
  let userValue = prompt(
    "Please enter a number less than 100 to generate a row set of tiles"
  );
  if (userValue > 0 && userValue <= 100) {
    deleteBoxes();
    createUserBoxes(userValue);
    singleColor();
    randomColorButton();
    resetButton();
  } else {
    alert("Please Enter a number between 1 and 100");
  }
}
