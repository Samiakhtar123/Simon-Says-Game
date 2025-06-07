let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red" , "yellow" , "green" , "purple"];

let alert = document.getElementsByClassName(".box-container");

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
        if(started == false){
            console.log("game is about to start");
            started = true;
        
        levelUp()
        }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },1000);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },1000);
}

function levelUp(){

    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    

    btnflash(randbtn);
    
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    } else {
        h2.innerText = `game over!! Press any key to Restart \nYour points : ${level}`;
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        document.querySelector("body").style.backgroundColor = "red";
        reset();
    }
}


function btnpress(){
    console.log("btn was pressed");
    let btn = this;
    userflash(btn);
    
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}