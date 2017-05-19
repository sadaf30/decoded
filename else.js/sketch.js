//reference prof dawn
//modified sadaf shaikh
var circX = 200;//defining variables
var circY = 200;
var circStroke = 125;
var circR = 250;
var circG =125;
var circB = 80;
var circSize = 75;
var recX = 100;
var recY = 300;
var recStroke = 35;
var recCol = 'lemonchiffon';
var recSize = 75;
var canvBG = 'peachpuff';
var speed = 2;
var alph = 125; 



function setup() {
	createCanvas(400, 400);
}


function draw() {
	background(canvBG);
	stroke(circStroke);
	fill(circR, circG, circB, alph);
	stroke(circStroke);
	ellipse(circX, circY, circSize, circSize);//creates ellipse
	ellipse(circX + 50, circY - 75, circSize, circSize);//ellipse
	fill(circR, circG, circB, 135);

	stroke(recStroke);
	fill(recCol);
	rect(recX, recY, recSize, recSize);//creates rectangle

	circX = circX + speed;//motion 
	recY = recY - speed;

	if (circX < width) {//defining boundaries

		circSize += 0.5; 

	} else {

		if (circX > width) {
			speed = speed * -1; 
			circSize *= -1; 

		}

	}

}