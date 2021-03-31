/*
    Planning : 

    gameBoardModule : Creates single instance of Game Board, containing the current state of the board 
    (Should not apply rendering Logic, however unsure), Should apply onhover/onclick function 
    displayController : Creates single instance of the rendered game board, 


*/
//B
let player1 = displayController.enterNames(1);
let player2 = displayController.enterNames(2);
displayController.board(); 

const GameBoard = (()=>{
    const boardstate = [[null, null, null],[null, null, null],[null, null, null]];
    const playerTurn = 
})();

const displayController = (() => {
    const enterNames = (playerNum)=>{
        let inputfield = prompt(`Player ${playerNum} Name : `);
        return playerFactor(inputfield, playerNum);
    }
    const board = () => { 
        GameBoard.boardstate.forEach(element => {
            element.forEach(tile => { 
                let tileDOM = tileCreation();
                tileClickEvent(tileDOM, tile);
            })
        });
     }

     const tileCreation = () =>{ 
        let tile = document.createElement("div");
        return tile; 
     }
     const tileClickEvent = (tileDOM, tileNum) => {
        tile.addEventListener('click', ()=>{

        })
     }
})();

const playerFactor = (name, playerNum)=>{

}