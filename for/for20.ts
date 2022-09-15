//  An integer N (> 0) is given. Using one loop-statement compute the sum 1! + 2! + 3! + … + N!, where N! (N–factorial) is the product of all
// integers in the range 1 to N: N! = 1·2·…·N. To avoid the integer overflow, compute the sum using real variables and output the result as a real number.

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const n: number = getRandomValue() + 1;
console.log("n = ", n);

let factorial: number = 1;
let sum: number = 0;

for (let i = 1; i <= n; i++) {
    factorial *= i;
    sum += factorial;

}
console.log("sum of factorials = ", sum);
