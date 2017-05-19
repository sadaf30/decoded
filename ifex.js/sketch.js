//ref prof dawn
//mod by sadaf
var circX = 200; //defining variables
var circY = 200; 
var circStroke = 125; 
var circR = 155; 
var circG = 200; 
var circB = 100; 
var circSize = 75;
var recX = 100;
var recY = 300;
var recStroke = 35;
var recCol = 'yellow';
var recSize = 75;
var canvBG;
canvBG = 'salmon'; 
var speed = 2;



function setup() {  
	createCanvas(400, 400); 
}


function draw() {
	background(canvBG); 
	stroke(circStroke); 
	fill(circR, circG, circB);  
	stroke(circStroke);  
	ellipse(circX, circY, circSize, circSize); 
	ellipse(circX + 50, circY - 75, circSize, circSize); // by adding +  50 and -75, the position of the ellipse is offset against the other.
	fill(circR, circG, circB, 135); 
	
	circX = circX + speed; 
					   
    stroke(recStroke);
    fill(recCol);
    rect(recX, recY, recSize, recSize);
    
    recY = recY - speed; // use a - incrementor to make the rectangle appear to move up on the canvas.
    
    if(circX > width || circX < 0) { 
    	speed = speed *-1;			
    } 					// in this case, the y position is only reversed if it is less than 0. 
}