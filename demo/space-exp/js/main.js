
var speedScale =0.1;

var windowHeight = $(window).height(),
windowWidth = $(window).width(),
sunRadius = 1391.4,
angleMer = 0,
angleVe=20,
angleEa=60,
angleMa=100,
angleBe=110,
angleJu=130,
angleSa=170,
angleUr=210,
angleNe=240,
// angleMer = 0,
// angleVe=0,
// angleEa=0,
// angleMa=0,
// angleJu=0,
// angleSa=0,
// angleUr=0,
// angleNe=0,
speedMer=0.02*speedScale,
speedVe=0.018*speedScale,
speedEa=0.010*speedScale,
speedMa=0.008*speedScale,
speedJu=0.004*speedScale,
speedSa=0.002*speedScale,
speedUr=0.001*speedScale,
speedNe=0.0008*speedScale,
x, y,
scaleAmount = 0.3, translateX=0, translateY=0, scaleAmountR, translateXR,translateYR;




function setup() {
  bg = loadImage("images/stars.png");
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100); // Set colour mode to hue-saturation-brightness-(alpha) and value upperbounds

}



function draw() {
  background(bg);
  // Add semi-transparent rectangle on every run of draw, creates fading visuals effect
  noStroke();


  fill(220, 30, 11, 50);
  clear();
  rect(0, 0, windowWidth, windowHeight);


  zoom();


  drawSun();
  drawMercury();
  drawVenus();
  drawEarth();
  drawMars();
  drawJupiter();
  drawSaturn();
  drawUranus();
  drawNeptune();

  arrowControls();
}//end of draw


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function drawSun(){
  fill(46, 97, 98, 100);
  noStroke();
  ellipse(windowWidth/2, windowHeight/2, sunRadius, sunRadius); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
}


function drawMercury(){
  noFill();
  stroke(100, 30);
  ellipse(windowWidth/2, windowHeight/2, sunRadius*1.6, sunRadius*1.6);

  fill(230, 29, 67, 100);
  x = windowWidth/2 + cos(angleMer)*sunRadius*0.8; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleMer)*sunRadius*0.8; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, 4.879, 4.879); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(100*scaleAmount);
  text("Mercury", x+7, y+7);
  angleMer += speedMer;
}


function drawVenus(){
  noFill();
  stroke(100, 30);
  ellipse(windowWidth/2, windowHeight/2, sunRadius*2, sunRadius*2);

  fill(32, 86, 67, 100);
  x = windowWidth/2 + cos(angleVe)*sunRadius*1; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleVe)*sunRadius*1; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, 12.104, 12.104); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(100*scaleAmount);
  text("Venus", x+9, y+9);
  angleVe += speedVe;
}

function drawEarth(){
  noFill();
  stroke(100, 30);
  ellipse(windowWidth/2, windowHeight/2, sunRadius*2.4, sunRadius*2.4);

  fill(185, 36, 73, 100);
  x = windowWidth/2 + cos(angleEa)*sunRadius*1.2; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleEa)*sunRadius*1.2; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, 12.752, 12.752); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(100*scaleAmount);
  text("Earth", x+24, y+24);
  angleEa += speedEa;
}

function drawMars(){
  noFill();
  stroke(100, 30);
  ellipse(windowWidth/2, windowHeight/2, sunRadius*2.8, sunRadius*2.8);

  fill(31, 44, 71, 100);
  x = windowWidth/2 + cos(angleMa)*sunRadius*1.4; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleMa)*sunRadius*1.4; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, 6.779, 6.779); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(100*scaleAmount);
  text("Mars", x+13, y+13);
  angleMa += speedMa;
}

function drawJupiter(){
  noFill();
  stroke(100, 30);
  ellipse(windowWidth/2, windowHeight/2, sunRadius*3.2, sunRadius*3.2);

  fill(20, 71, 95, 100);
  x = windowWidth/2 + cos(angleJu)*sunRadius*1.6; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleJu)*sunRadius*1.6; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, 139.822, 139.822); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(100*scaleAmount);
  text("Jupiter", x+70, y+70);
  angleJu += speedJu;
}

function drawSaturn(){
  noFill();
  stroke(100, 30);
  ellipse(windowWidth/2, windowHeight/2, sunRadius*3.6, sunRadius*3.6);

  fill(39, 65, 93, 100);
  x = windowWidth/2 + cos(angleSa)*sunRadius*1.8; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleSa)*sunRadius*1.8; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, 116.464, 116.464); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(100*scaleAmount);
  text("Saturn", x+59, y+59);
  angleSa += speedSa;
}

function drawUranus(){
  noFill();
  stroke(100, 30);
  ellipse(windowWidth/2, windowHeight/2, sunRadius*4, sunRadius*4);

  fill(181, 22, 75, 100);
  x = windowWidth/2 + cos(angleUr)*sunRadius*2; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleUr)*sunRadius*2; // Set frequency on y-axis
  noStroke();
  var uranus = ellipse(x, y, 50.724, 50.724); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(100*scaleAmount);
  text("Uranus", x+27, y+27);
  angleUr += speedUr;
}

function drawNeptune(){
  noFill();
  stroke(100, 30);
  ellipse(windowWidth/2, windowHeight/2, sunRadius*4.4, sunRadius*4.4);

  fill(215, 38, 80, 100);
  x = windowWidth/2 + cos(angleNe)*sunRadius*2.2; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleNe)*sunRadius*2.2; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, 49.244, 49.244); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(100*scaleAmount);
  text("Neptune", x+27, y+27);
  angleNe += speedNe;
}
