
//reference prof dawn
//modified by sadaf shaikh

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(125);

	var y = 0;
	while (y <= height) {//looping to create pattern
		stroke(0);
		fill(255);
		rect(200, y, 50, 50);//rectangle
		y = y + 50;//motion
	}

	for (y = 0; y <= height; y += 50) {//looping to create pattern
		stroke(255);
		fill(0);
		rect(300, y, 50, 50);//rectangle
	}
}