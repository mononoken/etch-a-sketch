const grid = document.getElementById('the-grid');

const gridSquares = [];

function createGrid(squareQuantity) {
  let newDiv;
  for (let i=0; i < squareQuantity; i++) {
    newDiv = document.createElement('div');
    newDiv.className = 'grid-square';
    gridSquares.push(newDiv);
    grid.appendChild(newDiv);
  }
}

createGrid(256);

for (let gridSquare=0; gridSquare < gridSquares.length; gridSquare++) {
  gridSquares[gridSquare].addEventListener("mouseover", () => {
    gridSquares[gridSquare].classList.add("grid-square-filled");
  }, false);
}