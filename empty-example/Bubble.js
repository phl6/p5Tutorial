class Bubble{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    
    show(){
        stroke(255);
        strokeWeight(4);
        noFill();
        // noStroke();
        // fill(255, 25);
        ellipse(this.x, this.y, this.r*2);
    }

    move(){
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
}