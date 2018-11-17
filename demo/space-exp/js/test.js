function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
}
function draw(){
 //move the camera away from the plane by a sin wave
 camera(0, 0, sin(frameCount * 0.01) * 100);
 fill(255);
 stroke(100);
 strokeWeight(10);
ellipse(20,20,700,700);
}
