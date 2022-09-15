// Given two integers A and B (A < B), find the product of all integers in the range A to B inclusive

function getRandomvalue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const a: number = getRandomvalue() + 1;
console.log("a = ", a);
const b: number = getRandomvalue() + 1;
console.log("b = ", b);

let productOfAllIntegers: number = 1;

for ( let i = a; i <= b; i++) {
    productOfAllIntegers *= i;
}

console.log("productOfAllIntegers =", productOfAllIntegers);
