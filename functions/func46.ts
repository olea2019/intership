// Write an integer function GCD2(A, B) that returns the greatest common divisor (GCD) of two positive integers A and B. Use the Euclidean algorithm: 
// GCD(A, B) = GCD(B, A mod B), if B ≠ 0; GCD(A, 0) = A, where "mod" denotes the operator of taking the remainder after integer division. Using this 
// function, find the greatest common divisor for each of pairs (A, B), (A, C), (A, D) provided that integers A, B, C, D are given.

function getRandomValue(range = 20) {
    return Math.trunc(Math.random() * range);
}

const a: number = 20;
const b: number = 10;
const c: number = getRandomValue() + 1;
const d: number = getRandomValue() + 1;

function gcd2(a: number, b: number): number {
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

console.log(`gcd(${a}, ${b}) =`, gcd2(a, b));
console.log(`gcd(${a}, ${c}) =`, gcd2(a, c));
console.log(`gcd(${a}, ${d}) =`, gcd2(a, d));