const boxes = document.querySelectorAll(".box");
const gameinfo = document.querySelector(".game-info");
const newgamebtn = document.querySelector(".btn");
let xx = document.querySelector(".winnerx");
let yy = document.querySelector(".winnery");
const newround =document.querySelector(".round");
 let tiee = document.querySelector(".tiee");


let currentplayer ;
let gamegrid;
let scorex ;
let scorey ;
let tie ;
let answer ;
let fillCount ;
const winningpositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



function initgame() {
    currentplayer = "X" ;
    scorex = "" ;
    xx.innerHTML = "";
    yy.innerHTML = "";
    tiee.innerHTML = "";
     scorey ="" ;
     tie = "" ;
    gamegrid = ["" ,"" , "" ,"","","","","",""];
    boxes.forEach((box,index) =>{
        box.innerText= "";
        boxes[index].style.pointerEvents = "all" ;
        box.classList.remove("win");
        box.classList.remove("win");
        box.classList.remove("win");
        //box.classList = `box box${index+1}`;
    } );

    newgamebtn.classList.remove("active");
    gameinfo.innerText = `Current Player - ${currentplayer}`;
}

initgame();

function checkGameOver() {
     answer = "";
    winningpositions.forEach((position) => {
      // All 3 boxes should be non-empty and have the same value
      if (
        (gamegrid[position[0]] !== "" || gamegrid[position[1]] !== "" || gamegrid[position[2]] !== "") &&
        (gamegrid[position[0]] === gamegrid[position[1]]) && (gamegrid[position[1]] === gamegrid[position[2]])
      ) {
        if (gamegrid[position[0]] === "X") {
          answer = "X";
         
          
        } else {
          answer = "O";
          
        }
  
        boxes.forEach((box) => {
          box.style.pointerEvents = "none";
        });
  
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
      }
    });

    if(answer != "") {
        gameinfo.innerText = `Winner Player - ${answer}`;
        newgamebtn.classList.add("active");
        scoreupdate()
        answer = "" ;
        return; }

        //let's check whether there is tie
       // ...

// let's check whether there is a tie
 fillCount = 0;
gamegrid.forEach((box) => {
  if (box !== "") {
    fillCount++;
  }
});

if (fillCount === 9) {
  gameinfo.innerText = "Game tied!";
   tie ++ ;
    tiee.innerHTML =`Tie Matches: ${tie}`;
  
  newgamebtn.classList.add("active");
}

 function scoreupdate(){
  if(answer === "X"){  scorex ++ ;
    xx.innerHTML = `Score of X : ${scorex}`;
    return;
}
 else if(answer === "O"){
    scorey++ ;
    yy.innerHTML = `Score of O : ${scorey}`;
    return;
}


 }
}

 
    



    function SWAP(){if(currentplayer === "X"){
    currentplayer = "O" ;
} else {
    currentplayer = "X" ;
}
gameinfo.innerText = `Current Player - ${currentplayer}`;
}

function roundnew() {
  function initialize() {
      currentplayer = "X";
      gamegrid = ["", "", "", "", "", "", "", "", ""];
      boxes.forEach((box, index) => {
          box.innerText = "";
          boxes[index].style.pointerEvents = "all";
          box.classList.remove("win");
          box.classList.remove("win");
          box.classList.remove("win");
          //box.classList = `box box${index+1}`;
      });

      newgamebtn.classList.remove("active");
      gameinfo.innerText = `Current Player - ${currentplayer}`;
  }

  initialize();
}

    
   
  
  

function handleclick(index){
 if(gamegrid[index] === ""){
      boxes[index].innerText = currentplayer ;
    gamegrid[index] = currentplayer ;
    boxes[index].style.pointerEvents = "none";
    SWAP() ;
    checkGameOver();

}}

boxes.forEach((box,index)=> {
    box.addEventListener("click", () =>{
        handleclick(index);
    } ) 
}
);
 newgamebtn.addEventListener("click", initgame);
newround.addEventListener("click" , roundnew);
