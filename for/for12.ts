// Given an integer N (> 0), find the value of a following product of N factors: 1.1 · 1.2 · 1.3 · … .

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const n: number = getRandomValue() + 1;
console.log("n = ", n);

let valueofProduct: number = 1;

for (let i = 1, factor = 1.1; i <= n; i++, factor += 0.1) {
    console.log(factor);
    valueofProduct *= factor;
}

console.log("valueofProduct =",valueofProduct);
