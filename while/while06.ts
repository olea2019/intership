// Given an integer N (> 0), compute the double factorial of N: N!! = N·(N−2)·(N−4)·…, where the last factor equals 2 if N is an even number,
// and 1 otherwise. To avoid the integer overflow, compute the double factorial using a real variable and output the result as a real number.

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const n: number = getRandomValue() + 1;
console.log("n = ", n);

let rate: number = 0;
let factorial: number = 1;

while (n - rate > 0) {
    if (n % 2 === 0) {
        factorial *= n - rate;
        rate += 2;
        console.log(factorial);
    }
    if (n % 2 === 1) {
        factorial *= n - rate;
        rate += 1;
        console.log(factorial);
    }
}

