/* valerian */

let pacman;
let z = 1.85 // upper mouth radian
let w = 0.2 // lower mouth radian
let speed = 0.03 // speed of mouth opening & closing

function setup() { 
    createCanvas(1000, 40);
    pacman = new Pacman(20,20);
} 

function draw() { 
    background(81, 194, 231);
    pacman.show();
    pacman.move();
}

class Pacman {
    constructor(x, y){
    this.x = x;
    this.y = y;
    }

    show(){
        //Pacman body
        fill(255, 255, 0);
        ellipse(this.x, this.y, 30, 30);
        //Pacman mouth
        fill(81, 194, 231);
        // if the upper mouth radian reaches 2*PI, 
        // the direction reverses.
        // this affects the lower mouth as well.
        if (z >= 2 || z <= 1.8) {
        speed = speed*(-1) 
        }
        arc(this.x, this.y, 30, 30, (z+=speed)*PI, (w-=speed)*PI, PIE);
        //Pacman eye
        ellipse(this.x, (this.y-7), 4, 4);
        fill(81, 194, 231);
        //stroke(0,0,255)
        noStroke ();
        }
    xSpeed = 2;
    move() {
        this.x = this.x + this.xSpeed;
        if (this.x==1000){
            this.x=20;
        }
    }
}
