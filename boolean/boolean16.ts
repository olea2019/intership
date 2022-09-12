// Given a positive integer, verify the following proposition: ―The integer is a two-digit even number. 

function getRandomValue (range = 100) {
    return Math.trunc(Math.random() * range);
}

const a: number = getRandomValue();
console.log("a =", a);

const b = (a % 2 === 0) && ((a > 9) && (a < 100));
console.log(b);
