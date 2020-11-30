// draw a spinning box
// with width, height and depth of 50
function setup() {
    createCanvas(800,1200, WEBGL);
  }
  
  function draw() {
    background(0);
    stroke(180);
    strokeWeight(4);
    rotateX(frameCount * 0.03);
    rotateY(frameCount * 0.03);
    box(80);
  }
