var arr=[["3.png"],["4.png"]]
var position=0;
var focus=0;
var getarray=["3.png"];
function run(){
    let img=document.getElementById("pacman1");
    focus=(focus+2)%2;
    img.src=arr[direction][focus];
    position=position+20;
    pacman1.style.left=position+"px";
}
setInterval(run,200);
var velocityX = 15;
var velocityY = 10;
var positionX = 290;
var positionY = 0;
var maxX = 1000;
var minX = 290;
var direction = 0;
function myFunction() {
    if (direction) {
   positionX=positionX -velocityX;
   pacman1.style.left = positionX + "px";
   if(positionX <= minX) direction=0;
    } else {
        positionX=positionX + velocityX;
        pacman1.style.left  = positionX + "px";
        if(positionX >= maxX) direction=1;
    
    }
}
setInterval(myFunction,50);


