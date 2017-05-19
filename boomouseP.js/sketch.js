//reference prof dawn
//mod.sadaf shaikh

var diam = 200;
var bgCol = 'powderblue';
var bgSwitch = 'lightpink';

function setup() {
	createCanvas(400, 400);
	background(bgCol);
	noStroke();
	fill('lemonchiffon');
	ellipse(width / 2, height / 2, diam, diam);//circle
}


function draw() {

	}

function mousePressed() { // the mousePressed() function executes once when the mouse is pressed.
                          // mousePressed() is a reserved functionin p5
	background(bgSwitch);
	noStroke();
	fill('lightyellow');
	ellipse(width / 2, height / 2, diam, diam);
}