const bigContainer = document.querySelector(".big-container");
const containerSize = 30;
const defGridSize = 64;
let divSize = containerSize / defGridSize;

function makeGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            let d = document.createElement("div");
            divSize = containerSize / gridSize;
            d.style.width = `${divSize}em`;
            d.style.height = `${divSize}em`;
            bigContainer.appendChild(d);
            d.addEventListener("mouseover", () => {
                d.style.backgroundColor = "black";
            })
        }
    }
}

const reset = document.getElementById("reset-btn");
reset.addEventListener("click", () => {
    let grids = document.querySelectorAll("div > div");
    for(let grid of grids) {
        grid.parentNode.removeChild(grid);
    }
    do {
        newGridSize = parseInt(prompt("Number of squares per side of grid: (Defualt is 64, Maximum is 100)"))}
    while (newGridSize > 100);
    makeGrid(newGridSize);
})

makeGrid(defGridSize);