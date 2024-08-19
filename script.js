const container = document.querySelector("#container");

function createSquares() {
    for (let i = 1; i <= 256; i++) {
        const square = container.appendChild(document.createElement("div"));
    }
}

createSquares();