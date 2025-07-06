const Button = document.getElementById("amount");

let userInput = "";


let Container = document.getElementById("container");

let containerSize = Container.clientWidth;

const Square = document.querySelector(".square");
Square.addEventListener("mouseenter",
  () => {
    Square.style.opacity = 1;
  },
  { once: true }
);

 function startSquares(){

    let ogDiv = document.createElement("div");
    ogDiv.classList.add("square");
    Container.appendChild(ogDiv);
    ogDiv.addEventListener(
      "mouseenter", () => {
        ogDiv.style.opacity = 1;
      },
      {once: true}
    );
 }

 for (i = 0; i<16 * 16 ; i++){
  startSquares();
 }


 
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
    return;
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










