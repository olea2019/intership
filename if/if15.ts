// Given three real numbers, output the sum of two largest values

function getRandomValue (range = 10) {
    return Math.trunc(Math.random() * range);
}

const a: number = getRandomValue();
console.log("a =", a);

const b: number = getRandomValue();
console.log("b =", b);

const c: number = getRandomValue();
console.log("c =", c);

let sum: number = 0;
let lesserValue: number = 0;

if (Math.max(a, b) === a) {
    sum += a;
    lesserValue = b;
} else {
    sum += b;
    lesserValue = a;
}
console.log( sum);

if (Math.max(sum, c) <= c) {
    sum += c;
} else {
    sum += lesserValue;
}

console.log("sum of two largest values =", sum);
