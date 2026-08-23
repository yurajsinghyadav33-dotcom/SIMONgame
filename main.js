let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;
let h2 = document.querySelector("h2");
let btn = ["red","yellow","green","purple"];



let startBtn = document.querySelector("#start");
startBtn.addEventListener("click",function(){
    if(started == false){
        started = true;
        console.log("Game Start");
        levelUp();
    }
})


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let rndmIdx = Math.floor(Math.random()*3);
    let rndmClr = btn[rndmIdx];
    let rndmBtn = document.querySelector(`#${rndmClr}`);
    gameSeq.push(rndmClr);
    console.log(gameSeq);
    gameFlash(rndmBtn);
}

function check(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
    } else{
        h2.innerHTML = `GAME OVER Your Score was <b> ${level}</b> <br> Click StartBtn for New Game`;
        reset();
    }
}

function pressBtn(){
  if(started == true){
    let btn =  this;
    let btnClr = btn.getAttribute("id");
     userFlash(btn);
     userSeq.push(btnClr);
     check(userSeq.length-1);
  }
}

let allBtns = document.querySelectorAll(".box");
for(let btn of allBtns){
    btn.addEventListener("click",pressBtn);
}

function reset(){
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
}