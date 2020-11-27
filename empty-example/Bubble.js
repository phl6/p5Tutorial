class Bubble{
    constructor(){
        this.x = 100;
        this.y = 150;
    }
    
    show(){
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }

    move(){
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
}