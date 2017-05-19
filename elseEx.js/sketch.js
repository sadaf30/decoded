//sadaf shaikh
var x=200;
var y=100;
var speed=2;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background('lightpink');
  stroke('lemonchiffon');
  fill('lemonchiffon');
  ellipse(x,y,50,50);//ellipse
  
  if(x>width){//MAKES it into continuos loop
    
    x=speed*-1;
  }
  else{
    x=x+speed
  }
  
}