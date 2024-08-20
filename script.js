const container = document.querySelector("#container");

function createSquares(num) {
    for (let i = 1; i <= num; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.opacity = 0;
        container.appendChild(square);
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            let currentOpacity = parseFloat(square.style.opacity);
            square.style.opacity = (currentOpacity+0.1) + "";
        });
    });
}

function getSquaresPerSide() {
    let squaresPerSide = Number(prompt("Please insert the number of squares per side for the new grid. The maximum allowed value is 100."));
    if (!Number.isInteger(squaresPerSide) || squaresPerSide > 100) {
        alert ("Invalid input.");
    } else {
        container.replaceChildren();
        createSquares((squaresPerSide**2));
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.style.width = (100/squaresPerSide) + "%";
            square.style.height = (100/squaresPerSide) + "%";
        });
    }
}

createSquares(256);

button = document.querySelector("button");
button.addEventListener("click", (getSquaresPerSide));
