// An integer N (> 1) is given. Find the largest integer K such that the sum 1 + 2 + … + K is less than or equal to N. Output K and the corresponding sum.

function getRandomValue(range = 50) {
    return Math.trunc(Math.random() * range);
}

const n: number = getRandomValue() + 2;
console.log("n = ", n);

let k: number = 0;
let sum: number = 1;

while(sum + k <= n) {
    k++;
    sum += k;
    console.log(k);
}

console.log("sum = ", sum);
console.log("k = ", k);
