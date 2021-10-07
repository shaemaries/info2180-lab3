"use strict";

window.onload = function(){
    var board = document.getElementById("board");
    boardSetup(board);
}

function boardSetup(board) {

    var divLength = board.getElementsByTagName('div').length;

    for (var i = 0; i < divLength; i++){
        board.getElementsByTagName('div')[i].classList.add('square');
    }
}