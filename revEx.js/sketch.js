// reference prof dawn
//modified sadaf shaikh
var bg=200;
var cirX=200;
var cirY=200;
var cirSz=50;
var speed=2;
var cirF='pink';


function setup() {
  createCanvas(400,400);
}

function draw() {
  background(bg);
  fill(cirF);
  ellipse(cirX,cirY,cirSz,cirSz);//creates ellipse
  cirX=cirX+speed;//motion
  if(cirX>width||cirX<0){//bounce effect
    speed=speed*-1;
    
  }
}