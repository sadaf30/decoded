//reference prof dawn
//modified by sadaf
var float1 = {//defining object
	x1: 50,
	y1: 0,
	x2: 150,
	y2: 90,
	speed: 2,
	display: function() { // the display name-value pair  as its value. 
		stroke(random(255), random(255), random(255));
		strokeWeight(100);
		point(this.x1, this.y1);
		point(this.x2, this.y2); // the keyword "this" references a local variable inside the defined function's object.
	},
	move: function() {
		this.x1 = this.x1 + this.speed;
		this.y1 = this.y1 + this.speed;
		this.y2 = this.y2 + this.speed;
	}
}

var float2 = {
	x1: 400,
	y1: 200,
	x2: 500,
	y2: 300,
	speed: 2,
	display: function() {
		stroke(random(255), random(255), random(255));
		strokeWeight(100);
		point(this.x1, this.y1);
		point(this.x2, this.y2);
	},
	move: function() {
		this.x1 = this.x1 + this.speed;
		this.y1 = this.y1 + this.speed;
		this.y2 = this.y2 + this.speed;
	}
}

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	float1.move();//callin move function
	float1.display();//calling display function
	float2.move();
	float2.display();
}