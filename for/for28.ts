// A real number X (|X| < 1) and an integer N (> 0) are given.
// Compute the expression 1 + X/2 − 1·X2/(2·4) + 1·3·X3/(2·4·6) − … ++ (−1)N−1·1·3·…·(2·N−3)·XN/(2·4·…·(2·N)).
// The result is an approximate value of the square root of 1 + X.

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const n: number = getRandomValue() + 1;
console.log("n = ", n);
const x: number = Math.random();
console.log("x = ", x);

let factorialOfX: number = 1;
let odd: number = 1;
let even: number = 1;
let expression: number = 1;

for (let i = 1; i <= n; i++) {
    factorialOfX *= x;
    odd *= 2 * i - 3;
    even *= 2 * i;
    expression += Math.pow(-1, i) * even * factorialOfX / odd;
}
console.log(expression);
