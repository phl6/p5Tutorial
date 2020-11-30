// let bubble1;
// let bubble2;
let bubbles = [];

function setup() {
  createCanvas(1200, 800);
  background(153);

}

function draw() {
  // put drawing code here
  background(0);
  for(let i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
  }
}

function mouseDragged() {
  let r = random(10,50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}