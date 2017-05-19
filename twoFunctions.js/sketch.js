//sadaf shaikh
var h=0;
function setup() {
  createCanvas(400,400)
}

function draw() {
   background('lightpink')
    fill('yellow')
 ellipse(200,200, 200, 200);//face
 fill('powderblue')
 ellipse(150, 200, 50, 50);//eyes
 ellipse(250, 200, 50, 50);//eyes
 fill(0)
 ellipse(150, 200, 20, 20);//pupils
 ellipse(250, 200, 20, 20);
 strokeWeight(5);//pupils
 fill('red')
 ellipse(200, 250, 60, h)//mouth
 }
 function mouseClicked(){//opens and closes mouth
    if(h==0){
       h=60;
    }
 else{
    h=0;
 }
 }