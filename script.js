const container = document.querySelector('#container');
const gridBtn = document.querySelector('.grid-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const opacityBtn = document.querySelector('.opacity-btn');
let rainbowMode = true;
let opacityMode = false;

function createSquares(num) {
  for (let i = 1; i <= num; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

function setSquaresPerSide() {
  let squaresPerSide = Number(
    prompt(
      'Please insert the number of squares per side for the new grid. The maximum allowed value is 100.'
    )
  );

  if (!Number.isInteger(squaresPerSide) || squaresPerSide > 100) {
    alert('Invalid input.');
  } else {
    container.replaceChildren();
    createSquares(squaresPerSide ** 2);
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      square.style.width = 100 / squaresPerSide + '%';
      square.style.height = 100 / squaresPerSide + '%';
    });
  }
}

function toggleRainbow() {
  if (opacityMode) {
    opacityMode = false;
  }

  rainbowMode = !rainbowMode;
}

function toggleOpacity() {
  if (rainbowMode) {
    rainbowMode = false;
  }

  opacityMode = !opacityMode;
}

function setRandomColor(event) {
  if (rainbowMode) {
    const target = event.target;

    if (target.style.backgroundColor === '') {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
  }
}

function setGradualOpacity(event) {
  if (opacityMode) {
    const target = event.target;
    let currentOpacity = +target.style.opacity;

    if (currentOpacity < 1) {
      target.style.opacity = currentOpacity + 0.1;
    }
  }
}

createSquares(256);

container.addEventListener('mouseover', setRandomColor);
container.addEventListener('mouseover', setGradualOpacity);
gridBtn.addEventListener('click', setSquaresPerSide);
rainbowBtn.addEventListener('click', toggleRainbow);
opacityBtn.addEventListener('click', toggleOpacity);
