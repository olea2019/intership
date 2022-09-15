// Given positive integers N and K, find the sum: 1**K + 2**K+ … + N**K.
// To avoid the integer overflow, compute the sum using real variables and output the result as a real number. 

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const n: number = getRandomValue() + 1;
console.log("n = ", n);
const k: number = getRandomValue() + 1;
console.log("k = ", k);

let sum: number = 0;

for (let i = 1; i <= n; i++) {
    sum += i**k;
}
console.log(sum);
