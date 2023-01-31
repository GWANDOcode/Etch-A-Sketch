const drawingBoard = document.querySelector(".drawing_board");

let gridSize = 16; // gridSize x gridSize e.g(16x16)
let cells = document.querySelectorAll(".cell");

//Creates the rows and columns to the drawingboard
function buildDrawingBord() {
    for (i = 0; i < gridSize; i++) {

        drawingBoard.appendChild(document.createElement("div"));
        drawingBoard.lastChild.classList.add("row");
        let row = drawingBoard.lastChild;

        for (j = 0; j < gridSize; j++) {
        row.appendChild(document.createElement("div"));
        row.lastChild.classList.add("cell");
        };

    };
};

//Delets drawing board 
function deleteDrawingBord() {
    while(drawingBoard.firstChild) {
        drawingBoard.removeChild(drawingBoard.lastChild);
    };
};

//Sizing for each pixel
let pixelWidth = drawingBoard.offsetWidth/gridSize;
let pixelHeight = drawingBoard.offsetHeight/gridSize; 

function resizePixel() {

    pixelWidth = drawingBoard.offsetWidth/gridSize;
    pixelHeight = drawingBoard.offsetHeight/gridSize; 

    cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.style.width = pixelWidth + "px";
        cell.style.height = pixelHeight + "px";
    });

    console.log("Heigth: " + pixelHeight);
    console.log("Width: " + pixelWidth);
};

//Pencil colorchange
const colorPicker = document.querySelector(".colorPicker");
const blackPencil = document.querySelector(".blackPencil");
const eraser = document.querySelector(".eraser");

let pencilColor = blackPencil.value;

blackPencil.addEventListener("click", () => {
    pencilColor = blackPencil.value;
});

eraser.addEventListener("click", () => {
    pencilColor = eraser.value;
});

colorPicker.addEventListener("input", () => {
    pencilColor = colorPicker.value;
});

//Colorchange on hover
let mouseDown = false;
drawingBoard.onmousedown = () => {
    mouseDown = true;
    mouseCellEventHandler();
};
drawingBoard.onmouseup = () => {mouseDown = false};

function mouseCellEventHandler() {
    cells.forEach(cell => {

        cell.addEventListener("mouseover", () => {
            if (mouseDown === true) {
            cell.style.backgroundColor = pencilColor;
            };
        });

    });
};

//Slider
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".sliderValue");

sliderValue.textContent = slider.value;

slider.addEventListener("input", () => {
    sliderValue.textContent = slider.value;
    gridSize = slider.value;
    deleteDrawingBord();
    buildDrawingBord();
    resizePixel();
});

buildDrawingBord();
resizePixel();