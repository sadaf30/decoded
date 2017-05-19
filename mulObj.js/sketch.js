/* 
ref prof dawn
mod.sadaf
*/


var circle = {//defining object
	x: 200,
	y: 200,
	diam: 50,
	r: 150,
	g: 0,
	b: 150
}


var rectangle = {//defining objects
	x: 100,
	y: 100,
	diam: 75,
	r: 200,
	g: 150,
	b: 225
}


function setup() {
	createCanvas(400, 400);
}


function draw() {
	background('papayawhip');
	noStroke();
	fill(circle.r, circle.g, circle.b);//using objects 
	ellipse(circle.x, circle.y, circle.diam, circle.diam);
	fill(rectangle.r, rectangle.g, rectangle.b);
	rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam);
}