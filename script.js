const drawingBoard = document.querySelector(".drawing_board");

let pencilColor = "red";
let gridSize = 16; // gridSize x gridSize e.g(16x16)

//Creates the rows and columns to the drawingboard
for (i = 0; i < gridSize; i++) {

    drawingBoard.appendChild(document.createElement("div"));
    drawingBoard.lastChild.classList.add("row");
    let row = drawingBoard.lastChild;

    for (j = 0; j < gridSize; j++) {
       row.appendChild(document.createElement("div"));
       row.lastChild.classList.add("cell");
       console.log("I AM CELL")
    };

    console.log("I AM ROW");
};

//Sizing for each pixel
let pixelWidth = drawingBoard.offsetWidth/gridSize;
let pixelHeight = drawingBoard.offsetHeight/gridSize; 

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.style.width = pixelWidth + "px";
    cell.style.height = pixelHeight + "px";
});

//Colorchange on hover
let mouseDown = false;
drawingBoard.onmousedown = () => {mouseDown = true};
drawingBoard.onmouseup = () => {mouseDown = false};

cells.forEach(cell => {

    cell.addEventListener("mouseover", () => {
        if (mouseDown === true) {
        cell.style.backgroundColor = pencilColor;
        };
    });

});

//Slider
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".sliderValue");

sliderValue.textContent = slider.value;

slider.addEventListener("input", () => {
    sliderValue.textContent = slider.value;
});