const gridContainer = document.getElementById('the-grid');

const gridSquares = [];

let gridSize = 16;

let squareWidth = gridContainer.offsetWidth / gridSize;
let squareHeight = gridContainer.offsetHeight / gridSize;

function createGrid(gridSize) {
  let squareQuantity = gridSize * gridSize;
  let newDiv;
  for (let i=0; i < squareQuantity; i++) {
    newDiv = document.createElement('div');
    newDiv.className = 'grid-square';
    newDiv.style.width = `${squareWidth}px`;
    newDiv.style.height = `${squareHeight}px`;
    gridSquares.push(newDiv);
    gridContainer.appendChild(newDiv);
  }
}

function getGridSize() {
  gridSize = +prompt('Please enter a number equal to or below 100 for the desired number of squares for the grid length.');

  while (isNaN(gridSize) || gridSize > 100 || gridSize < 1) {
    gridSize = +prompt('Input not recognized. Please enter a number greater than 2 or less than or equal to 100 for the desired number of squares for the grid length.');
  }

  squareWidth = gridContainer.offsetWidth / gridSize;
  squareHeight = gridContainer.offsetHeight / gridSize;
  return gridSize;
}

function resetGrid() {
  for (let gridSquare=0; gridSquare < gridSquares.length; gridSquare++) {
    gridSquares[gridSquare].classList.remove('grid-square-filled');
  }

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  while (gridSquares[0]) {
    gridSquares.pop();
  }
    
  gridSize = getGridSize();

  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  createGrid(gridSize);
  for (let gridSquare=0; gridSquare < gridSquares.length; gridSquare++) {
    gridSquares[gridSquare].addEventListener('mouseover', () => {
      gridSquares[gridSquare].classList.add('grid-square-filled');
    }, false);
  }
}

createGrid(16);

for (let gridSquare=0; gridSquare < gridSquares.length; gridSquare++) {
  gridSquares[gridSquare].addEventListener('mouseover', () => {
    gridSquares[gridSquare].classList.add('grid-square-filled');
  }, false);
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetGrid);