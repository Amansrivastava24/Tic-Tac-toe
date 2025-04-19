let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".new-Game")
let message=document.querySelector(".mes-container")
let messagepara=document.querySelector(".winmes")

let turnO=true;

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame=()=>{
    turnO=true;
    boxenable();
    message.classList.add("hide");
}


boxes.forEach((box)=>{
   box.addEventListener("click", () => {
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;

    checkWinner()
   });
});

const boxdisabl= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const boxenable= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    messagepara.innerText=`Congratulation you have won Winner is ${winner}`;
    boxdisabl();
    message.classList.remove("hide");
   
};

const checkWinner= () =>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" &&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winnner")
                showWinner(pos1)
            }
        }
    }
};

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);