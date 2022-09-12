// Given coordinates x1, y1, x2, y2 of two chessboard squares (as integers in the range 1 to 8), verify the following proposition: ―A knight can move from 
// one square to another during one turn

function getRandomValue (range = 8) {
    return Math.trunc(Math.random() * range);
}

const x1: number = getRandomValue() + 1;
console.log("x1 =", x1);

const x2: number = getRandomValue() + 1;
console.log("x2 =", x2);

const y1: number = getRandomValue() + 1;
console.log("y1 =", y1);

const y2: number = getRandomValue() + 1;
console.log("y2 =", y2);


