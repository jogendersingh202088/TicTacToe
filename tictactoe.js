let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


// store the player turn ---------

let turnO= true;// player o
let count =0 ;// to track the draw

//make 2d array to store the winng pattern 2d array = arrays ke ander array

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{

    turnO = true ;
    count =0 ;
    enableBoxes();
    msgContainer.classList.add("hide");

};


// add a event listner to track the boxes 

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
       


     if(turnO){  // print for player O

        box.innerText="O";

        turnO=false;
     }
     else{ // print for player X 
        box.innerText="X";
        turnO=true;
     }

    box.disabled=true;
    count++; // disable the button once clicked 


    // checkWinner
   let isWinner =  CheckWinner();
   if(count === 9 && !isWinner){
    gameDraw();

   }

    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };


const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner)=>{

    msg.innerText= `Congrulation, winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const CheckWinner =()=>{

    for(let pattern of winPatterns){

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val != "" && pos3val != ""){

            if(pos1val===pos2val &&pos2val==pos3val){
                   
                
                  showWinner(pos1val);

            }
        }
    }
     
} ;

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);







 




