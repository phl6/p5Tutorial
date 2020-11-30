// let bubble1;
// let bubble2;
let bubbles = [];
let bubble;

function setup() {
  createCanvas(1200, 800);
  background(153);
  for (let i = 0; i < 5; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function draw() {
  // put drawing code here
  background(0);
  for(let i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
  }
}

// function mouseDragged() {
//   let r = random(10,50);
//   let b = new Bubble(mouseX, mouseY, r);
//   bubbles.push(b);
// }

// function mousePressed() {
//   let r = random(10,50);
//   let b = new Bubble(mouseX, mouseY, r);
//   bubbles.push(b);
// }

function mousePressed(){
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].clicked(mouseX, mouseY);
  }
}