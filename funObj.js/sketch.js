//reference prof  dawn
//sadaf shaikh

var float1 = {
	x1: 50,
	y1: 0,
	x2: 150,
	y2: 90,
	speed: 2,
	display: function() { // the display name-value (aka key-value) pair includes a function as its value. 
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
	float1.move();
	float1.display();
	float2.move();
	float2.display();
}