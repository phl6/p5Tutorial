class Bubble{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }
    
    show(){
        stroke(255);
        strokeWeight(4);
        noFill();
        // noStroke();
        fill(this.brightness, 100);
        ellipse(this.x, this.y, this.r*2);
    }

    move(){
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    clicked(px, py){
        let d = dist(px, py, this.x, this.y);
        if(d < this.r){
            console.log('BUBBLE has been clicked');    
        }else {
            console.log('BUBBLE has NOT been clicked');
        }
        
        (this.brightness == 0) ? this.brightness = 255 : this.brightness =0;
    }
}