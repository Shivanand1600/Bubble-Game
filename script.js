var time=60;
var score=0;
var hit=0;

function HitChange(){
  hit = Math.floor(Math.random()*10);
  document.getElementById("Hit").innerHTML=hit;
}

function scoreInc(){
  score+=10;
  document.getElementById("scoreCount").innerHTML=score;
}

function makeBubble(){
  var box="";
  for(let i=1;i<=152;i++){
    var nm=Math.floor(Math.random()*10)
     box+=`<div class="nBox">${nm}</div>`
  }
  document.querySelector("#pbtm").innerHTML=box;
  }

function timer(){
  var timerCount=setInterval((event)=>{
     if(time>0){
      time--;
     document.getElementById("count").innerHTML=time;
     }
     else if(time == 0){
      clearInterval(timerCount);
      document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
    }
  },1000)
}

document.querySelector("#pbtm").addEventListener("click",(dets)=>{
  var clickedNum=Number(dets.target.innerHTML)
   if(clickedNum === hit){
    scoreInc();
    makeBubble();
    HitChange();
   }
})


makeBubble();
timer();
HitChange()