const Button = document.getElementById("amount");

let userInput = "";

let Container = document.getElementById("container");

const Square = document.querySelector(".square");
Square.addEventListener("mouseenter",
  () => {
    Square.style.opacity = 1;
  },
  { once: true }
);

function addSquare(squareSize) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("square");
  newDiv.style.width = `${squareSize}px`;
  newDiv.style.height = `${squareSize}px`;
  Container.appendChild(newDiv);
  newDiv.addEventListener(
    "mouseenter",
    () => {
      newDiv.style.opacity = 1;
    },
    { once: true }
  );
}

//divs added

Button.addEventListener("click", () => {
  for (let i = 0; i < 256; i++) {
    const divs = Container.querySelectorAll(".square");
    divs.forEach((div) => div.remove());
  }

  userInput = prompt("Enter amount:");
  console.log(userInput);

  if (userInput > 100) {
    alert("Number less than 100 please");
  }

  let squaresPerRow = userInput;

  let gap = 1;
  let gapAmount = gap * (squaresPerRow - 1);

  let squareSize = Math.floor((containerSize - gapAmount) / squaresPerRow);

  Container.style.width = `${(squareSize * squaresPerRow) + gapAmount}px`;
  Container.style.height = `${(squareSize * squaresPerRow) + gapAmount}px`;
  console.log(
    "Set container size to:",
    Container.style.width,
    Container.style.height
  );
  console.log(
    "Computed container size:",
    Container.clientWidth,
    Container.clientHeight
  );

  for (let i = 0; i < userInput * userInput; i++) {
    addSquare(squareSize);
  }
});

let containerSize = Container.clientWidth;

let squaresPerRow = userInput;

let gap = 1;
let gapAmount = gap * (squaresPerRow - 1);

let squareSize = Math.floor((containerSize - gapAmount) / squaresPerRow);

Container.style.width = `${squareSize * squaresPerRow + gapAmount}px`;
Container.style.height = `${squareSize * squaresPerRow + gapAmount}px`;
