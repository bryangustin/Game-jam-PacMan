document.addEventListener("DOMContentLoaded",function(){
        const grid = document.querySelector('.grid');
        let score = document.getElementById('score');
        let scoreNumber = 0;
        score.innerHTML = scoreNumber;
        const width = 32;
        const height = 16;

    // layout of the grid

        const layout = [[0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
                        [0,1,3,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,3,1,0],
                        [0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,3,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0],
                        [0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0],
                        [0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0],
                        [0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,2,2,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0],
                        [0,0,0,1,1,0,1,1,1,0,0,0,1,1,2,2,2,2,1,0,1,1,0,1,0,1,1,0,0,0,1,0],
                        [0,1,0,0,0,0,1,0,0,0,1,0,0,1,2,2,2,2,1,0,1,1,0,1,0,1,1,0,1,1,1,0],
                        [0,1,1,1,0,1,1,0,1,1,1,1,0,1,2,2,2,2,1,0,0,0,0,1,0,1,1,0,0,0,1,0],
                        [0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0],
                        [0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0],
                        [0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0],
                        [0,1,3,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,3,1,0],
                        [0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0],
                        [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                        ]


    // 0 = plancton;
    // 1 = wall;
    // 2= fantoms lair;
    // 3 = recycle;
    // 4 = empty


    const squares= [];

    function createBoard(){
        
        layout.forEach((arrow) => {
            arrow.forEach((number) => {
                let square = document.createElement('div');
                grid.appendChild(square);
                squares.push([square, number]);
            })})

        squares.forEach((square) => {

                if(square[1] === 0){
                    square[0].classList.add("plancton");
                }
                else if(square[1]===1){
                    square[0].classList.add('wall');
                }
                else if(square[1]===2){
                    square[0].classList.add('fantomslair');
                }
                else if(square[1]===3){
                    square[0].classList.add('recycle');
                }
            /* else if( layout[i]===4){
                    squares[i].classList.add('empty');
                }*/
            })

    } 

    createBoard();

    //Index pacman
    let pacmanCurrentIndex = 368;

    //Pacman class creation
    squares[pacmanCurrentIndex][0].classList.remove('plancton');
    squares[pacmanCurrentIndex][0].classList.add('pac-man'); //place pacman in grid

    //Move pacman
    
    function movePacman(e){

        switch(e.keyCode){
            case 37: //left arrow
                if(!squares[pacmanCurrentIndex-1][0].classList.contains('wall')) {
                    squares[pacmanCurrentIndex][0].classList.remove('pac-man'); //remove pacman from previous square
                    pacmanCurrentIndex -=1; //new index pacman
                    squares[pacmanCurrentIndex][0].classList.add('pac-man'); //place pacman in grid again on new square
                }
                break
            case 38: //arrow up
                if(!squares[pacmanCurrentIndex-32][0].classList.contains('wall')){
                    squares[pacmanCurrentIndex][0].classList.remove('pac-man');
                    pacmanCurrentIndex -=32;
                    squares[pacmanCurrentIndex][0].classList.add('pac-man'); //place pacman in grid again
                }
                break
            case 39: //right arrow
                if(!squares[pacmanCurrentIndex+1][0].classList.contains('wall')){
                    squares[pacmanCurrentIndex][0].classList.remove('pac-man');
                    pacmanCurrentIndex +=1;
                    squares[pacmanCurrentIndex][0].classList.add('pac-man'); //place pacman in grid again
                }
                break
            case 40: //down arrow
                if(!squares[pacmanCurrentIndex+32][0].classList.contains('wall')){
                    squares[pacmanCurrentIndex][0].classList.remove('pac-man');
                    pacmanCurrentIndex +=32;
                    squares[pacmanCurrentIndex][0].classList.add('pac-man'); //place pacman in grid again
                }
                break
        }
        planctonEaten();
        recycleEaten();
    }

    document.addEventListener('keyup', movePacman)

    //Eat plancton

    function planctonEaten(){
        if(squares[pacmanCurrentIndex][0].classList.contains('plancton')){
            scoreNumber++;
            score.innerHTML = scoreNumber;
            squares[pacmanCurrentIndex][0].classList.remove('plancton');
        }
    }
    
    //Eat recycle
    function recycleEaten(){
        if(squares[pacmanCurrentIndex][0].classList.contains('recycle')){
            scoreNumber+=10;
            score.innerHTML = scoreNumber;
            squares[pacmanCurrentIndex][0].classList.remove('recycle');    
            fantoms.forEach(fantom=>{
                fantom.isScared= true;
            });
            document.querySelectorAll('.fantom').forEach(fantom=>fantom.classList.add('scaredFantom'));
            setTimeout(unscareGhost,10000);
        }
    }
    
    //unscare ghost function
    function unscareGhost(){
        fantoms.forEach(fantom=>{
            squares[fantom.currentIndex][0].classList.remove('scaredFantom');
            fantom.isScared = false;
        })
    }

    //

    //creation of fantoms 

    class Fantom {

        constructor(name, startIndex){
            this.name = name;
            this.startIndex = startIndex;
            this.currentIndex = startIndex;
            this.isScared = false;
        }

    }

    fantoms = [ new Fantom("mask", 239),
                new Fantom("plasticBag", 271),
                new Fantom("tire",240),
                new Fantom("boat",272)
    ]


    fantoms.forEach(fantom =>{
        squares[fantom.currentIndex][0].classList.add(fantom.name);
        squares[fantom.currentIndex][0].classList.add('fantom');

    })


})





// /* valerian est fou :) */

// let pacman;
// let z = 1.85 // upper mouth radian
// let w = 0.2 // lower mouth radian
// let speed = 0.03 // speed of mouth opening & closing

// function setup() { 
//     createCanvas(1000, 40);
//     pacman = new Pacman(20,20);
// } 

// function draw() { 
//     background(81, 194, 231);
//     pacman.show();
//     pacman.move();
// }

// class Pacman {
//     constructor(x, y){
//     this.x = x;
//     this.y = y;
//     }

//     show(){
//         //Pacman body
//           fill(255, 255, 0);
//           ellipse(this.x, this.y, 30, 30);
//         //Pacman mouth
//           fill(81, 194, 231);
//         // if the upper mouth radian reaches 2*PI, 
//         // the direction reverses.
//         // this affects the lower mouth as well.
//         if (z >= 2 || z <= 1.8) {
//           speed = speed*(-1) 
//         }
//         arc(this.x, this.y, 30, 30, (z+=speed)*PI, (w-=speed)*PI, PIE);
//         //Pacman eye
//         ellipse(this.x, (this.y-7), 4, 4);
//         fill(81, 194, 231);
//         //stroke(0,0,255)
//         noStroke ();
//           }
//     xSpeed = 2;
//     move() {
//         this.x = this.x + this.xSpeed;
//         if (this.x==1000){
//             this.x=20;
//         }
//     }
// }




