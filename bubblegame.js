var score = 0;
var hitrn = ``;
var timer  = 60;



function makebubble(){

var clutter  =``;
for(var i = 0;i<=111;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
makebubble();




function runtimer(){
    var timerinterval  = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timercount").innerHTML = timer;
        }
        else{
            clearInterval(timerinterval);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}
runtimer();




function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = hitrn;
}
getnewhit();




function increasescore(){
    score+=10;
    document.querySelector("#scoreval").innerHTML = score;
}



function decreasescore(){
    score-=10;
    document.querySelector("#scoreval").innerHTML = score;
}


document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickednumber = Number(details.target.innerHTML);
    if(clickednumber == hitrn){
        increasescore();
        makebubble();
        getnewhit();
    }
    else{
        decreasescore();
        makebubble();
        getnewhit();
    }
})
