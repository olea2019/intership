// Taking into account that the least common multiple of two positive integers A and B equals A·(B/GCD(A, B)), where GCD(A, B) is the greatest common 
// divisor of A and B, and using the GCD2 function from the task Func46, write an integer function LCM2(A, B) that returns the least common multiple of
// A and B. Using this function, find the least common multiple for each of pairs (A, B), (A, C), (A, D) provided that integers A, B, C, D are given.

function getRandomValue(range = 20) {
    return Math.trunc(Math.random() * range);
}

const a: number = 20;
const b: number = 10;
const c: number = getRandomValue() + 1;
const d: number = getRandomValue() + 1;

function greatestCommonDivisor(a: number, b: number): number {
    let mod: number = Math.min(a, b);
    while(a / mod !== b / mod) {
        mod = a % b;
        [a, b] = [b, mod];
        if (b === 0) {
            return a;
        }
    }
    return mod;
}

function leastCommonMultiple(a: number, b: number): number {
    const divisor: number = greatestCommonDivisor(a, b); 
    let multiple = a * (b / divisor);
    return multiple;
 }

console.log(`leastCommonMultiple(${a}, ${b}) =`, leastCommonMultiple(a, b));
console.log(`leastCommonMultiple(${a}, ${c}) =`, leastCommonMultiple(a, c));
console.log(`leastCommonMultiple(${a}, ${d}) =`, leastCommonMultiple(a, d));
