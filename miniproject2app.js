let gameseq=[];
let userseq=[];
let btns=["green","red","yellow","blue"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if (started==false){
        console.log("game started");
        started=true;
        levelup();
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    ;},500);
}
function userFlash(btn){
    btn.classlist.add("userflash");
    setTimeout(function(){
        btn.classlist.remove("userflash")
    ;},500);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
    //random button choose
    gameseq.push(randColor);
    console.log(gameseq);
    
}

/*function checkAns(idx){
    let idx=level-1;
    if (userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup, 1000);
        }
       // console.log("same value")
    }else{
        h2.innerHTML=`Game Over! <b>Your score is ${level}</b> <br>Press any key to restart`;
        
        setTimeout (function(){
            document.querySelector("body").style.backgroundColor="red";
        },150)
        reset();
    }
   

}

function btnpress(){
   console.log(this);

    let btn=this;
    userFlashFlash(btn);

    userColor= btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);

}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}*/