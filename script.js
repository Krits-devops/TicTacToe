const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//let create function to initialize it

function initGame() {
    currentPlayer = "X";
    gameGrid = ["" ,"" ,"" ,"", "", "" ,"" ,"" ,""];
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

function handleClick(index){
 if(gameGrid[index] === "" ) {
    boxes[index].innerHTML = currentPlayer;
    gameGrid[index] = currentPlayer;
 }
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",() =>{
        handleClick(index);
    })
});
