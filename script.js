const Container = document.getElementById("container");

const Square = document.querySelector(".square");
Square.addEventListener("transitionend", () => {
    Square.style.opacity = 1;
}, {once: true});





function addSquare() {
    let square = document.createElement("div");
    }

