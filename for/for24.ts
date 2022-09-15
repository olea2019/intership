// A real number X and an integer N (> 0) are given. Compute the expression 1 − X**2/(2!) + X**4/(4!) − … + (−1)**N·X**(2·N)/((2·N)!)(N! = 1·2·…·N).
// The result is an approximate value of cos(X). 

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const n: number = getRandomValue() + 1;
console.log("n = ", n);
const x: number = getRandomValue() + 1;
console.log("x = ", x);

let rez: number = 1;
let expression: number = 1;
let factorialOfX: number = 1;
let sign: number = 1;

for (let i = 1; i <= 2 * n; i++) {
    rez *= i;
    factorialOfX *= x;
    if (i % 2 == 0) {
        sign *= -1
        expression  += sign * factorialOfX / rez;
    }
}
console.log( expression);
