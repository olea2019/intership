// An integer N (> 1) is given. An integer-valued sequence of the Fibonacci numbers FK is defined as: F1 = 1, F2 = 1, FK = FK−2 + FK−1, K = 3, 4, … .
// Determine whether N is a Fibonacci number or not, and output True or False respectively.

function getRandomValue(range = 100) {
    return Math.trunc(Math.random() * range);
}

const n: number = getRandomValue() + 2;
console.log("n = ", n);

let f1: number = 1;
let f2: number = 1;

while (n > f1) {
    [f1, f2] = [f2, f1 + f2];
    console.log(f1);
    if (n == f1) {
        console.log("n is fibonacci number");
        process.exit(0);
    }
}

console.log("n isnt fibonacci number");
