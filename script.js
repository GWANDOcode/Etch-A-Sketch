const drawingBoard = document.querySelector(".drawing_board");

let rowNumb = 16;
let columnNumb = 16;

//Creates the rows and columns to the drawingboard
for (i = 0; i < columnNumb; i++) {

    drawingBoard.appendChild(document.createElement("div"));
    drawingBoard.lastChild.classList.add("row");
    let row = drawingBoard.lastChild;

    for (j = 0; j < rowNumb; j++) {
       row.appendChild(document.createElement("div"));
       row.lastChild.classList.add("cell");
       console.log("I AM CELL")
    };

    console.log("I AM ROW");
};

//Sizing for each pixel
let pixelWidth = drawingBoard.offsetWidth/rowNumb;
let pixelHeight = drawingBoard.offsetHeight/columnNumb; 

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
        cell.style.backgroundColor = "red";
        };
    });

});

