//The setup function only happens once

var hana=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(112,232,196); //an RGB color for the canvas' background
  //circle
  stroke(hana,222,127) // an RGB color for the circle's border
  fill(230,255,hana,90); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(400,340,hana,hana); // center of canvas, 20px dia
   stroke(255,26,140) // an RGB color for the circle's border
  fill(26,222,190,59); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  rect(mouseX,mouseY,250,340,100,100); 
}

function mousePressed(){
	if (hana>=100){
		hana=0;
	}else{
		hana=hana+2;
	}
	}