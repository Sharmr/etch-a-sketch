const SIDE_LENGTH = 720;

function makeGrid(n, grid) {
    grid.style.gridTemplateColumns = "repeat("+n+", 1fr)";
    grid.style.gridTemplateRows = "repeat("+n+", 1fr)";
    grid.style.columnGap = "0px";
    grid.style.rowGap = "0px";
    grid.style.backgroundColor = "rgba(0, 0, 0 ,0.)";

    for(let i = 0 ; i < n*n ; i++) {
        div = document.createElement('div');
        div.style.backgroundColor = "thistle";
        grid.appendChild(div);
    }
}


window.onload = function () {
    const grid = document.querySelector('.grid');
    makeGrid(16, grid);
};