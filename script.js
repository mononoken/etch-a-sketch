const grid = document.getElementById('the-grid');

function createGrid(squareQuantity) {
  let newDiv;
  for (let i=0; i < squareQuantity; i++) {
    newDiv = document.createElement('div');
    newDiv.className = 'grid-square';
    grid.appendChild(newDiv);
  }
}

createGrid(16);