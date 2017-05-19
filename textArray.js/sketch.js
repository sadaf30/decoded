//ref prof dawn
//mod sadaf
var fruits=['APPLE','MANGO','CHERRY','GRAPES','BERRIES'];
function setup() {
  createCanvas(800,800);
  background('lemonchiffon');
  for(i=0;i<5;i++){
    strokeWeight(2);
    fill('powderblue');
    textSize(40);
    textFont("Georgia");
    text(fruits[i],i*100+50,i*100+50);//displays text in fruits array
  }
   
}
//nothing to be drawn
function draw() {
   
}