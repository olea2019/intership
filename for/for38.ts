// Given an integer N (> 0), find the sum: 1**N + 2**(N−1) + … + N**1.
// To avoid the integer overflow, compute the sum using real variables and output the result as a real number. 

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const n: number = getRandomValue() + 1;
console.log("n = ", n);

let sum: number = 0;

for (let i = 1; i < n; i++) {
    sum += i**(n - i + 1);
    console.log(sum);
}
console.log(sum);
