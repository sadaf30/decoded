//reference prof dawn
//modified by sadaf shaikh
function setup() {
  createCanvas(400,400);
}

function draw() {
  background('pink');
  var y=0;
  while(y<=height){
    strokeWeight(2);
    stroke(0);
    //fill('yellow');
    ellipse(x,y,50,50);//circle
    y=y+50;//motion
  
    for( var x=0;x<=width;x+=50){//creates pattern
      strokeWeight(2);
      stroke('lemonchiffon');
      fill('lemonchiffon');
      ellipse(x,y,50,50);//circle
      
    }
  }
  
  
}