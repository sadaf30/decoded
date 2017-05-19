/*sadaf-driver
stephen-typer
code which changes color on click
*/
var rect1 = {//defining objects
  x:125,
  y:150,
  w: 170, 
  h: 90
}

var rect2 = {
  x:190,
  y:240,
  w:40,
  h: 100
}

var rect3 = {
  x:165,
  y:300,
  w:90,
  h:40
}

var value = 'papayawhip';
var bg=0;
function setup() {
  createCanvas(400,400);
}

function draw() {
  strokeWeight(5);
  background(bg);
  fill('powderblue');
  ellipse(215,140,20,20);//top
  fill(value);
  rect(rect1.x, rect1.y, rect1.w, rect1.h);//shade
  fill('lightpink');
  rect(rect2.x, rect2.y, rect2.w, rect2.h);//stand
  fill('powderblue');
  rect(rect3.x, rect3.y, rect3.w, rect3.h);//base
  fill('lightsalmon');
  ellipse(212,320,15,15);//button
  
}



function mouseClicked() {//changes shade and background on click
  if (value =='papayawhip' && bg==0 ){
    value= 'yellow';
    bg='lightyellow';
    
  }else{
    value= 'papayawhip';
    bg=0;
 
  }
  
}
