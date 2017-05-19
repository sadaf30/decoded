//sadaf shaikh
var x=50;//variables defined for ellipse
var y=60;
var w=50;
var h=50;
var smy=100;

function setup() {//function for setup
  createCanvas(400,400);//this is canvas size
}

function draw() {//function for actual work
   background('powderblue');//sets background color to BLUE
   fill('plum');
   rect(240,110,30,60);//chimney
   fill('grey');
   ellipse(255,smy,10,10);//smoke
   smy=smy-0.05;
      fill(255,192,203);//fill for triangle
   triangle(200,100,80,200,320,200);//shape for roof
      fill(255,255,0);//fill for house rect
   rect(100,200,200,100);//shape for house walls
      fill(216,191,216);//fill for rect windows both
   rect(120,220,25,25);//shape for window left
   rect(240,220,25,25);//shape for window right
      fill(221,160,221);//fill for rect door
   rect(180,250,30,50);//shape for door
      fill('rgba(250,128,114,0.8)');//fill for rect base
   rect(0,300,400,400);//shape for base
   strokeWeight(3);
   //code for flowers
   line(10,280,10,300);
   fill('red');
   ellipse(10,280,10,10);
   line(30,280,30,300);
   fill('yellow');
   ellipse(30,280,10,10);
   line(50,280,50,300);
   fill('pink');
   ellipse(50,280,10,10);
   line(70,280,70,300);
   fill('blue');
   ellipse(70,280,10,10);
   line(90,280,90,300);
   fill('cyan');
   ellipse(90,280,10,10);
   //code for tree
   fill(0,100,0);
   triangle(350,100,320,240,380,240);
   fill(222,184,135);
   rect(340,240,20,60);
   //line(380,200,380,300);
   fill(255,143,0);
   ellipse(x,y,w,h);
   x= x + 0.1;//code for motion
   line(132,220,132,245);//window left vert line
   line(253,220,253,245);//window right vert line
   line(120,234,145,234);//window left horz line
   line(240,234,265,234);//window right horz line
   fill('powderblue');
   ellipse(205,275,7,7);//door knob
}