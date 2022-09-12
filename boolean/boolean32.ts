//  Given three integers a, b, c that are the sides of a triangle, verify the following proposition: ―The triangle with sides a, b, c is a right triangle

function getRandomValue (range = 100) {
    return Math.trunc(Math.random() * range);
}

const a: number = getRandomValue();
console.log("a =", a);

const b: number = getRandomValue();
console.log("b =", b);

const c: number = getRandomValue();
console.log("c =", c);

const triangle: boolean = (a**2 + b**2 === c**2) || (a**2 + c**2 === b**2) || (b**2 + c**2 === a**2);
console.log(triangle);
