const Button = document.getElementById("amount");


const Container = document.getElementById("container");



const Square = document.querySelector(".square");
Square.addEventListener("transitionend", () => {
    Square.style.opacity = 1;
}, {once: true});



function addSquare() {
    const newDiv = document.createElement("div")
    newDiv.classList.add("square")
    Container.appendChild(newDiv);
    newDiv.addEventListener("transitionend", () => {
    newDiv.style.opacity = 1;
}, {once: true});
}



for(let i = 0; i < 256; i++) {
    addSquare() 
}


Button.addEventListener("click", () => {
    userInput = prompt("Enter amount:");
    console.log(userInput);
    for(i = 0; i < userInput; i++) {
    addSquare() 
}


});




