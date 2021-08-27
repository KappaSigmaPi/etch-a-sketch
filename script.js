const container = document.querySelector('.eas-container');

function createGrid(rows) {
    container.innerHTML = '';
    for (let i = 0; i < rows * rows; i++) {
        let square = document.createElement('div');
        square.classList.add('grid-element-white');
        square.addEventListener('mouseover', () => {
            square.classList.remove('grid-element-white');
            square.classList.add('grid-element-black');
        });
        container.appendChild(square);
    }
}
function clearGrid() {
    const blackSquares =document.querySelectorAll('.grid-element-black');
    blackSquares.forEach((square) => {
        square.classList.remove('grid-element-black');
        square.classList.add('grid-element-white');
    })
}

const clearGridButton = document.querySelector('.clear-grid');
clearGridButton.addEventListener('click', clearGrid);

createGrid(16);