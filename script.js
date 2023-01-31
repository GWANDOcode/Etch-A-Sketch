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

let blackOn = false;
let eraserOn = false;
let colorPickerOn = false;

blackPencil.addEventListener("click", () => {
    pencilColor = blackPencil.value;

    blackOn = true;
    eraserOn = false;
    colorPickerOn = false;

    buttonActveColorBackground();
});

eraser.addEventListener("click", () => {
    pencilColor = eraser.value;

    blackOn = false;
    eraserOn = true;
    colorPickerOn = false;

    buttonActveColorBackground();
});

colorPicker.addEventListener("input", () => {
    pencilColor = colorPicker.value;

    blackOn = false;
    eraserOn = false;
    colorPickerOn = true;

    buttonActveColorBackground();
});

//Button active background
function buttonActveColorBackground() {
    if(blackOn === true) {
        blackPencil.classList.add("activeColor");
    } else if(blackOn === false) {
        blackPencil.classList.remove("activeColor");
    };

    if(eraserOn === true) {
        eraser.classList.add("activeColor");
    }  else if(eraserOn === false) {
        eraser.classList.remove("activeColor");
    };

    if(colorPickerOn === true) {
        colorPicker.classList.add("activeColor");
    }  else if(colorPickerOn === false) {
        colorPicker.classList.remove("activeColor");
    };

    if(gridStatus === 1) {
        gridButton.classList.add("activeColor");
    } else if(gridStatus === 0) {
        gridButton.classList.remove("activeColor");
    };
};

//DRAWING: Colorchange on hover
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
    gridCheck();
});

//Clear Board 
const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    deleteDrawingBord();
    buildDrawingBord();
    resizePixel();
    gridCheck();
});

//Grid on/ off
const gridButton = document.querySelector(".gridButton");
let gridStatus = 0;

function gridUp() {
    cells.forEach(cell => {
        cell.classList.add("gridLines");
    });
};

function gridDown() {
    cells.forEach(cell => {
        cell.classList.remove("gridLines");
    });
};

function gridCheck() { 
    if(gridStatus === 1) {
        gridUp();
    } else if (gridStatus > 1 || gridStatus === 0) {
        gridStatus = 0;
        gridDown();
    };
};

gridButton.addEventListener("click", () => {
    gridStatus++; //look gridCheck(), increments up to 1 and if over sets back to 0, acts as a switch
    gridCheck();
    buttonActveColorBackground();
});

// Start up 
buildDrawingBord();
resizePixel();
