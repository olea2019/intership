// Three real numbers A, B, C are given (A is not equal to 0). By means of a discriminant D = B**2−4·A·C, verify the following proposition: ―The 
// quadratic equation A·x**2+ B·x + C = 0 has real roots

function getRandomValue (range = 100) {
    return Math.trunc(Math.random() * range);
}

const a: number = getRandomValue();
console.log("a =", a);

const b: number = getRandomValue();
console.log("b =", b);

const c: number = getRandomValue();
console.log("c =", c);

const discriminant = b**2 - 4 * a * c;

console.log(discriminant >= 0);
