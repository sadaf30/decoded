/*reference prof dawn
mod.sadaf shaikh
https://vimeo.com/channels/learningp5js/138935677
*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(125);
  stroke(255);
  strokeWeight(4);
  noFill();
  
  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) {//defines mouse click
    if (mouseIsPressed) {//predefined function
      background('powderblue');
    }
    fill('lightpink');
  }
    rect(300, 200, 100, 100);
}