
var rect1={
  x:360,
  y:200,
  w:600,
  h:400
  
}
var rect2={
  x:380,
  y:220,
  w:530,
  h:350
  
}
var value=255;
var i=['Hello World'];
var font=255;

function setup() {
  createCanvas(1200,800);
  
}

function draw() {
  background('lightsalmon')
  strokeWeight(5);
  fill(0);
  rect(rect1.x,rect1.y,rect1.w,rect1.h,20);
  fill(value);
  rect(rect2.x,rect2.y,rect2.w,rect2.h);
  fill('lightpink');
  ellipse(935,400,45,45);
  fill(font);
  textSize(50);
  textFont('Arial black');
    text(i,500,400);
  
}
function mouseClicked(){
  if(value==255 && font==255){
    value='lemonchiffon';
    font=0;
  
    
  }
  else{
    value=255;
    font=255;
  }
}