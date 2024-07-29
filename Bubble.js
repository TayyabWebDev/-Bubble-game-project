


let cluter=""
let timer=15;
let score=0;
let run=0;
function makeBubble(){
for(i=1; i<=102; i++){
 const randomNum=Math.floor(Math.random()*10)
    cluter += `<div class="bubble">${randomNum}</div>`
}
document.getElementById('pbuttom').innerHTML=cluter
}

function runtimer(){
let tim= setInterval(function(){
        if(timer>0){
            timer--
         document.querySelector('#timestart').textContent=timer
        }
        else{
            document.querySelector('#pbuttom').innerHTML=`<h1>GAME OVER  ${score}<h1>`
            clearInterval(tim);
        }
    },1000)
}
//hit timer
function hittimer(){
    run=Math.floor(Math.random()*10)
    document.getElementById("hitvalu").textContent=run;
}
function increaseScore(){
    score +=10;
    document.getElementById('scorehere').textContent=score
}
makeBubble()
runtimer()
hittimer()
document.querySelector('#pbuttom').addEventListener("click",function(dot){
let clicked=Number(dot.target.textContent);
if(clicked === run){
    increaseScore()
    makeBubble()
    hittimer()
}
})


