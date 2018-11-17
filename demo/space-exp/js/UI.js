getStats();

function zoomIn(){
  scaleAmount += 0.005;
  if (scaleAmount >1.00){
    scaleAmount=1.00;
  }
}

function zoomOut(){
  scaleAmount -= 0.005;
  if (scaleAmount <0.05){
    scaleAmount=0.05;
  }
}



function arrowControls(){
  if (keyIsDown(LEFT_ARROW)){
    moveLeft();
  }
  if (keyIsDown(RIGHT_ARROW)){
    moveRight();
  }
  if (keyIsDown(UP_ARROW)){
    moveUp();
  }
  if (keyIsDown(DOWN_ARROW)){
    moveDown();
  }
  if (keyIsDown(79)){
    zoomOut();
  }
  if (keyIsDown(73)){
    zoomIn();
  }
  if (keyIsDown(ESCAPE)){
    resetAll();
  }
  getStats();
}


function moveLeft(){
  translateX +=(25*scaleAmountR);
}

function moveUp(){
  translateY +=(25*scaleAmountR);
}

function moveRight(){
  translateX -=(25*scaleAmountR);
}

function moveDown(){
  translateY -=(25*scaleAmountR);
}


function getStats(){
  scaleAmountR = parseFloat(Math.round(scaleAmount * 100) / 100).toFixed(2);
  translateXR = parseFloat(Math.round(translateX * 100) / 100).toFixed(2);
  translateYR = parseFloat(Math.round(translateY * 100) / 100).toFixed(2);
  $('.zoomFactor').text(scaleAmountR);
  $('.transX').text(translateXR);
  $('.transY').text(translateYR);
}

function resetAll(){
  scaleAmount = 0.3;
  translateX = 0;
  translateY = 0;
}

function zoom(){
  translate(+width/2+(translateX*scaleAmount), +height/2+(translateY*scaleAmount));
  translate(translateX, translateY);
  scale(scaleAmount, scaleAmount);
  translate(-width/2+(translateX*scaleAmount), -height/2+(translateY*scaleAmount));
}
