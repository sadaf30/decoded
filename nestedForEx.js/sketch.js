//sadaf shaikh
function setup() {
  createCanvas(600,600)
}

function draw() {
  for(var x=300;x<=width;x+=30){// black and white partitions
    for(var y =0;y<=height;y+=30){
      strokeWeight(5);
      stroke(0);
      line(x,y,x+30,y);
    }
  }
  
}