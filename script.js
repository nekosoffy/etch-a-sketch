const container = document.querySelector("#container");

function createSquares() {
    for (let i = 1; i <= 256; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

createSquares();

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
});