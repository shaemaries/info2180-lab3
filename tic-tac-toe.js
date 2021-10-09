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
        board.getElementsByTagName('div')[i].addEventListener('mouseover',squareMouseOver);
        board.getElementsByTagName('div')[i].addEventListener('mouseout',squareMouseOut);
        board.getElementsByTagName('div')[i].setAttribute('id',i);
     }
}

function squareClick(clickEvent){
    var clickedSquare = clickEvent.target;

    clickedSquare.classList.add(activeplayer);
    clickedSquare.textContent=activeplayer;


      if (!checkWin()){  
          if (activeplayer=="X"){
            tracker.push(activeplayer);
            activeplayer="O";
            clickedSquare.classList.remove(activeplayer);
        }
         else {
            tracker.push(activeplayer);
             activeplayer="X";  
             clickedSquare.classList.remove(activeplayer); 
            }  
      }
}

function squareMouseOver(overEvent){
    var overSquare=overEvent.target;
    overSquare.classList.add('hover');
}

function squareMouseOut(outEvent){
    var outSquare=outEvent.target;
    outSquare.classList.remove('hover');
}

function checkWin(){
  //horizontal   
  for (var i=0; i < 3; i++){
      var startpos= i*3;
      var endpos=startpos+3;
      var presentX=0;
      var presentO=0;  

      for (startpos; startpos<endpos; startpos++){
          var checkElement = document.getElementById(startpos).textContent;
          if(checkElement=="X"){
              presentX+=1;
            }
         if(checkElement=="O"){
            presentO+=1;
           }   
        }
        
        if (presentX==3 || presentO==3){
            winMessage();
            return true
        }
    } 
   
    //end of horizontal 

    //vertical
    for (var i=0; i < 3 ; i++){
        var startpos=i;
        var presentX=0;
        var presentO=0;
    

        for (var r=0; r <3; r++){
            var checkElement= document.getElementById(startpos).textContent;
            if(checkElement=="X"){
                 presentX+=1;
            }                  
            else if(checkElement=="O"){
                presentO+=1;
            } 
            startpos+=3; 
        } 
        if (presentX==3 || presentO==3){
            winMessage();
            return true
        } 
                 
        
    }

   //end of vertical 
      
    //diagional
    if((document.getElementById(0).textContent=="X") && (document.getElementById(4).textContent=="X") && (document.getElementById(8).textContent=="X") || (document.getElementById(0).textContent=="O") && (document.getElementById(4).textContent=="O") && (document.getElementById(8).textContent=="O")) {
        winMessage();
        return true
    }

    if((document.getElementById(2).textContent=="X") && (document.getElementById(4).textContent=="X") && (document.getElementById(6).textContent=="X")||(document.getElementById(2).textContent=="O") && (document.getElementById(4).textContent=="O") && (document.getElementById(6).textContent=="O")){
        winMessage();
        return true;
    }// end of digional code 


  if (tracker.length==8){
        var tieMessage= document.getElementById('status');
        tieMessage.textContent="Game ended in a tie. Try again";
    }
}


function winMessage(){
    var winMessage= document.getElementById('status');
        winMessage.classList.add('you-won');
        winMessage.textContent="Congratulations! "+ activeplayer+ " is the Winner";
}