// I really like the concept ,we both worked together and 
// shared ideas so we equally were involved in both projects.
// I tried to put function to make it change color
// hopefully it works.



var value='powderblue';

function setup() {
 createCanvas(400, 400);
}

function draw() {
  background('lightyellow');
  strokeWeight(5);
  
  fill('pink');
  rect(250, 250, 50, 50);//car bumper
  fill('yellow');
  ellipse(300,280,20,20);//headlights
  fill(value);
  rect(100, 200, 150, 100);// body
  fill('lavender');
  rect(130, 230, 20, 20);//window
  rect(208, 230, 20, 20);//window
  ellipse(130, 300, 30, 30);//tires
  ellipse(208, 300, 30, 30);//tires
}
  function mouseClicked(){//to change color
     if (value=='powderblue') 
     {
        value='lightcoral';
     }
     else{
        value='powderblue';
     }
     
  }

  