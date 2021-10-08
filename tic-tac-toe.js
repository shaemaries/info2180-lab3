"use strict";

let activeplayer= "X";
let tracker=[];

window.onload = function(){
    var board = document.getElementById("board");
    boardSetup(board);
}

function boardSetup(board) {

    var divLength = board.getElementsByTagName('div').length;

    for (var i = 0; i < divLength; i++){
        board.getElementsByTagName('div')[i].classList.add('square');
        board.getElementsByTagName('div')[i].addEventListener('click',squareClick);
    }
}

function squareClick(clickEvent){
    let clickedSquare = clickEvent.target;

    clickedSquare.classList.add(activeplayer);
    clickedSquare.textContent=activeplayer;

    if (activeplayer=="X"){
        tracker.push(activeplayer);
        activeplayer="O"
    }
    else {
        tracker.push(activeplayer);
        activeplayer="X";   
    }
}