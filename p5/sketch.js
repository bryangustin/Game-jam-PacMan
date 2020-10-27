
uppermouth = 1.85 // upper mouth radian
lowermouth = 0.2 // lower mouth radian
speed = 0.01 // speed of mouth opening & closing

function setup() {
    createCanvas(40, 40);
}

function draw() {

 //Pacman body
 fill(255, 255, 0);
 ellipse(20, 20, 30, 30);
 
 //Pacman mouth
 fill(81, 194, 231);
 // if the upper mouth radian reaches 2*PI, 
 // the direction reverses.
 // this affects the lower mouth as well.
 if (uppermouth >= 2 || uppermouth <= 1.8) {
   speed = speed*(-1) 
 }
 arc(20, 20, 30, 30, (uppermouth+=speed)*PI, (lowermouth-=speed)*PI, PIE);
 
 //Pacman eye
 ellipse(20, 12, 3, 3);
 fill(81, 194, 231);
 stroke(81, 194, 231);


}
