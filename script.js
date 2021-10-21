const gridContainer = document.getElementById('the-grid');

const gridSquares = [];

function createGrid(squareQuantity) {
  let newDiv;
  for (let i=0; i < squareQuantity; i++) {
    newDiv = document.createElement('div');
    newDiv.className = 'grid-square';
    gridSquares.push(newDiv);
    gridContainer.appendChild(newDiv);
  }
}

function resetGrid() {
  for (let gridSquare=0; gridSquare < gridSquares.length; gridSquare++) {
    gridSquares[gridSquare].classList.remove('grid-square-filled');
  }
}

createGrid(256);

for (let gridSquare=0; gridSquare < gridSquares.length; gridSquare++) {
  gridSquares[gridSquare].addEventListener('mouseover', () => {
    gridSquares[gridSquare].classList.add('grid-square-filled');
  }, false);
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetGrid);