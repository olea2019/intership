// Given two integers A and B, verify the following proposition: ―Each of the numbers A and B is odd. 

function getRandomValue (range = 100) {
    return Math.trunc(Math.random() * range);
}

const a: number = getRandomValue();
console.log("a =", a);

const b: number = getRandomValue();
console.log("b =", b);

const c = (a % 2 == 1) && (b % 2 == 1);
console.log(c);
