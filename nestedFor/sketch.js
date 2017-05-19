//reference professor dawn
//modified sadaf shaikh
function setup() {
	createCanvas(600, 400);
	background('peachpuff');
}

function draw() {
	strokeWeight(4);
	stroke(255);

	for (var x= 0; x <= width; x+= 60) {   //fills screen with circles
		for (var y= 0; y<= height; y+= 60) { 
			fill(mouseX, random(255), mouseY); //changes random color on mouse roll
			ellipse(x, y, 90, 90);  //ellipse
		}
	}
}