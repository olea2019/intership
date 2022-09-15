// Three positive real numbers A, B, C are given. A rectangle of size A × B contains the greatest possible amount of squares 
// with side C (without overlaps).Find the amount of squares placed on the rectangle. Do not use the operators of multiplication and division.

function getRandomValue(range = 5) {
    return Math.trunc(Math.random() * range);
}

const c: number = getRandomValue() + 1;
console.log("c = ", c);

const a: number = getRandomValue() + c;
console.log("a = ", a);

const b: number = getRandomValue() + a;
console.log("b = ", b);

let squaresInA: number = 0;
let squaresInB: number = 0;
let aCopy: number = a;
let bCopy: number = b;

while (bCopy >= c) {
    if (aCopy >= c) {
        squaresInA++;
        aCopy -= c;
    }
    if (bCopy >= c) {
        squaresInB++;
    }
    bCopy -= c;
}

let allSquares: number = 0;
let i: number = 0;

while (i < squaresInB) {
    allSquares += squaresInA;
    i++;
}

console.log("allSquares", allSquares);
