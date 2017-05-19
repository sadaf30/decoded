//sadaf shaikh

function setup() {//function for setup
  createCanvas(400,400);//this is canvas size
}

function draw() {//function for actual work
   background('powderblue');//sets background color to BLUE
      fill(255,192,203);//fill for triangle
   triangle(200,100,100,200,300,200);//shape for roof
      fill(255,255,0);//fill for house rect
   rect(100,200,200,100);//shape for house walls
      fill(216,191,216);//fill for rect windows both
   rect(120,220,25,25);//shape for window left
   rect(240,220,25,25);//shape for window right
      fill(221,160,221);//fill for rect door
   rect(180,250,30,50);//shape for door
      fill('rgba(250,128,114,0.8)');//fill for rect base
   rect(0,300,400,400);//shape for base
   //line(0,300,100,300);
   //line(300,300,400,300);
   fill(255,143,0);
   ellipse(100,100,50,50);
   
  
}