const bigContainer = document.querySelector(".big-container");
const containerSize = 30;
const defGridSize = 64;
let divSize = containerSize / defGridSize;
let isColorMode = false;
const btn16 = document.getElementById("grid16");
const btn32 = document.getElementById("grid32");
const btn48 = document.getElementById("grid48");
const btn64 = document.getElementById("grid64");
const btn80 = document.getElementById("grid80");
const btn96 = document.getElementById("grid96");

// create a new grid of size (gridSize x gridSize)
function makeGrid(gridSize) {
    setButtonColors();
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

// reset board button
function resetBoard(newGridSize) {
    let grids = document.querySelectorAll(".big-container > div");
    for(let grid of grids) {
        grid.parentNode.removeChild(grid);
    }
    makeGrid(newGridSize);
}

const reset = document.getElementById("reset-btn");
reset.addEventListener("click", function(){resetBoard(defGridSize)});

// rainbow implementation
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

function setButtonColors() {
    const allBtns = document.querySelectorAll(".left-btns button, .right-btns button");
    for(theButton of allBtns) {
        theButton.style.backgroundColor = 'white';
        theButton.style.color = 'red';
        theButton.style.borderColor = 'red';
    }
}

// size options
btn16.addEventListener("click", function(){resetBoard(16);});
btn16.addEventListener("click", () => {
    btn16.style.backgroundColor = 'red';
    btn16.style.color = 'white';
    btn16.style.borderColor = 'white';
});

btn32.addEventListener("click", function(){resetBoard(32)});
btn32.addEventListener("click", () => {
    btn32.style.backgroundColor = 'red';
    btn32.style.color = 'white';
    btn32.style.borderColor = 'white';
});

btn48.addEventListener("click", function(){resetBoard(48)});
btn48.addEventListener("click", () => {
    btn48.style.backgroundColor = 'red';
    btn48.style.color = 'white';
    btn48.style.borderColor = 'white';
});

btn64.addEventListener("click", function(){resetBoard(64)});
btn64.addEventListener("click", () => {
    btn64.style.backgroundColor = 'red';
    btn64.style.color = 'white';
    btn64.style.borderColor = 'white';
});

btn80.addEventListener("click", function(){resetBoard(80)});
btn80.addEventListener("click", () => {
    btn80.style.backgroundColor = 'red';
    btn80.style.color = 'white';
    btn80.style.borderColor = 'white';

});

btn96.addEventListener("click", function(){resetBoard(96)});
btn96.addEventListener("click", () => {
    btn96.style.backgroundColor = 'red';
    btn96.style.color = 'white';
    btn96.style.borderColor = 'white';
});

btn64.style.backgroundColor = 'red';
btn64.style.color = 'white';
btn64.style.borderColor = 'white';
makeGrid(defGridSize);