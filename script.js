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