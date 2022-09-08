//Given the side a of a square, find the perimeter P of the square: P = 4·a

function getRandomValue(range = 100) {
    return Math.random() * range | 0;
}
const a: number = getRandomValue(5);
console.log(a);

let p: number = 4 * a;
console.log(p);

