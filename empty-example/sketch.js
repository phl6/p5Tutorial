let bubble1;
let bubble2;

function setup() {
  createCanvas(1200, 800);
  background(153);
  bubble1 = new Bubble(200, 200, 40);
  bubble2 = new Bubble(400, 200, 20);
  console.log(bubble1.x, bubble1.y);
}

function draw() {
  // put drawing code here
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}
