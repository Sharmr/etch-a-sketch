const SIDE_LENGTH = 720;

function makeGrid(n, grid) {
    grid.style.gridTemplateColumns = "repeat("+n+", 1fr)";
    grid.style.gridTemplateRows = "repeat("+n+", 1fr)";
    grid.style.columnGap = "0px";
    grid.style.rowGap = "0px";
    grid.style.backgroundColor = "rgba(0, 0, 0 ,0.)";

    for(let i = 0 ; i < n*n ; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.margin = "0px";
        div.style.padding = "0px";
        div.style.backgroundColor = "thistle";

        div.addEventListener('mouseover', change);
        grid.appendChild(div);
    }
}

function change(e) {
    darken(e);
}

function darken(e) {
    e.target.style.backgroundColor = "rgba(0,0,0,1)";
}

function clear(e) {
    let n = prompt("How many squares per side in the new grid? (No more than a 100)");
    if (n > 100) {
        n = prompt("You may not choose a number greater than 100.");
    }
    if (n < 2) {
        n = prompt("You must have at least 2 squares per side.");
    }
    const grid = document.querySelector('.grid')
    removeAllChildNodes(grid);
    makeGrid(n, grid);
}

function removeAllChildNodes(parent)  {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

window.onload = function () {
    //create the grid
    const grid = document.querySelector('.grid');
    makeGrid(16, grid);

    //clear the board
    const button = document.querySelector('button[type=button]');
    button.addEventListener('click', clear);
};

