//ref prof dawn 
//mod sadaf
var circle = {//defining object
	x: 200,
	y: 200,
	diam: 50,
	r: 100,
	g: 120,
	b: 250
}



function setup() {
	createCanvas(400, 400);
}


function draw() {
	background('lightpink');
	noStroke();
	fill(circle.r, circle.g, circle.b);//using objects
	ellipse(circle.x, circle.y, circle.diam, circle.diam);
	
}