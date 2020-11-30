const nums = [100, 25, 45 ,72];

let index = 0;

function setup(){
    createCanvas(1200,800);

}

function draw(){
    background(0);
    stroke(255);
    strokeWeight(3);
    fill(51);

    // ellipse(100, 200, nums[0], nums[0]);
    // ellipse(200, 200, nums[2], nums[2]);
    // ellipse(200, 200, nums[index], nums[index]);

    for(let i = 0; i < nums.length; i++){
        ellipse(i*100+100, i+100, nums[i], nums[i]);
    }

}

function mousePressed(){
    (index == nums.length-1) ? index = 0 : index += 1;
}