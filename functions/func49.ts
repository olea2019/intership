// Taking into account the formula GCD(A, B, C) = GCD(GCD(A, B), C) and using the GCD2 function from the task Func46, write an integer function 
// GCD3(A, B, C) that returns the greatest common divisor of three positive integers A, B, C. Using this function, find the greatest common divisor 
// for each of triples (A, B, C), (A, C, D), (B, C, D) provided that integers A, B, C, D are given.

function getRandomValue(range = 20) {
    return Math.trunc(Math.random() * range);
}

const a: number = 12;
const b: number = 6;
const c: number = getRandomValue() + 1;
const d: number = getRandomValue() + 1;

function greatestCommonDivisor2Digits(a: number, b: number): number {
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

function greatestCommonDivisor3Digits(a: number, b: number, c: number): number {
    let divisor: number =  greatestCommonDivisor2Digits(a, b);
    if (Number.isInteger(c / divisor)) {
        return divisor;
    } else {
        divisor = greatestCommonDivisor2Digits(divisor, c);
    }
        return divisor;
}

console.log(`gcd3(${a}, ${b}, ${c}) =`, greatestCommonDivisor3Digits(a, b, c));
console.log(`gcd3(${a}, ${c}, ${d}) =`, greatestCommonDivisor3Digits(a, c, d));
console.log(`gcd3(${b}, ${c}, ${d}) =`, greatestCommonDivisor3Digits(b, c, d));
