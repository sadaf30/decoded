//ref prof dawn
//modified sadaf shaikh
var fruits=['apple','banana','mango','grapes','coconut'];
function setup() {
  createCanvas(500,500);
  background('lemonchiffon');
  for(i=0;i<5;i++){
    strokeWeight(2);
    fill('powderblue');//color of text
    textSize(40);//font size
    text(fruits[i],i*100+50,i*100+50);//displays text in fruits array
  }
  
}
//nothing to be drawn
function draw() {
  
}