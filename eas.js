const bigContainer = document.querySelector(".big-container");
const containerSize = 30;
const defGridSize = 64;
let divSize = containerSize / defGridSize;
let isColorMode = false;

function makeGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            let d = document.createElement("div");
            divSize = containerSize / gridSize;
            d.style.width = `${divSize}em`;
            d.style.height = `${divSize}em`;
            bigContainer.appendChild(d);
            d.addEventListener("mouseover", () => {
                if(isColorMode) {
                    let randRed = Math.random() * 255;
                    let randGreen = Math.random() * 255;
                    let randBlue = Math.random() * 255;
                    d.style.backgroundColor = "rgb(" + randRed + "," +  randGreen + "," + randBlue + ")";
                }
                else d.style.backgroundColor = "black";
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

const clrBtn = document.getElementById("color-btn");
clrBtn.addEventListener("click", () => {
    if(isColorMode) {
        isColorMode = false;
        clrBtn.innerHTML = "Color Mode"
    }
    else {
        isColorMode = true;
        clrBtn.innerHTML = "B&W Mode";
    }
})

makeGrid(defGridSize);