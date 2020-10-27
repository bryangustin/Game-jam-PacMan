
document.addEventListener("DOMContentLoaded",function(){
    const grid = document.querySelector('.grid');
    const score = document.getElementById('score');
    const width = 32;
    const height = 16;

// layout of the grid
    const layout = [0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                    0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,
                    0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,
                    0,1,0,1,0,0,3,1,0,0,0,0,1,1,3,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,
                    0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,
                    0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,
                    0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,2,2,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,
                    0,0,0,1,1,0,1,1,1,0,0,0,1,1,2,2,2,2,1,0,1,1,0,1,0,1,1,0,0,0,1,0,
                    0,1,0,0,0,0,1,0,0,0,1,0,0,1,2,2,2,2,1,0,1,1,0,1,0,1,1,0,1,1,1,0,
                    0,1,1,1,0,1,1,0,1,1,1,1,0,1,2,2,2,2,1,0,0,0,0,1,0,1,1,0,0,3,1,0,
                    0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,
                    0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,
                    0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,
                    0,1,3,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,
                    0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,
                    0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ]

const squares= [];

// 0 = plancton;
// 1 = wall;
// 2= fantoms lair;
// 3 = recycle;
// 4 = empty

function createBoard(){
    for (i = 0; i< layout.length; i++){
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);


    if(layout[i] === 0){
        squares[i].classList.add("plancton");
    }
    else if( layout[i]===1){
        squares[i].classList.add('wall');
    }
/* else if(layout[i]===2){
        squares[i].classList.add('fantoms');
    }*/
    else if(layout[i]===3){
        squares[i].classList.add('recycle');
    }
/* else if( layout[i]===4){
        squares[i].classList.add('empty');
    }*/
}
}

createBoard();


})

