//ref prof dawn
//modified sadaf shaikh

var on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {//toggles between two colors
  if (on) {
    background('papayawhip');
  } else {
    background('peachpuff');
  }
  
  stroke(255);
  strokeWeight(4);
  noFill();
  
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    fill('salmon');
  }
  rectMode(CENTER);
  rect(300, 200, 100, 100);
}

function mousePressed() {//defines mouse click
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    // if (on) {
    //   on = false;
    // } else {
    //   on = true;
    // }
    on = !on;
    
  }
}