// Write a logical function IsPowerN(K, N) that returns True, if an positive integer parameter K is equal to N (> 1) raised to some integer 
// power, and False otherwise. Having input an integer N (> 1) and a sequence of 10 positive integers and using this function, find the amount 
// of powers of base N in the given sequence.

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const n: number = 2;
console.log("n = ", n);
const k1: number = getRandomValue() + 1;
const k2: number = getRandomValue() + 1;
const k3: number = getRandomValue() + 1;
const k4: number = getRandomValue() + 1;
const k5: number = getRandomValue() + 1;

function isPowerN(n: number, k: number): boolean {
    let isPower: boolean = false;
    for (let i = 1; k >= n**i; i++) {
        if (k === n**i) {
            isPower = true;
            break;
        }
    }
    return isPower;
}

console.log(`${k1}`, isPowerN(n, k1));
console.log(`${k2}`, isPowerN(n, k2));
console.log(`${k3}`, isPowerN(n, k3));
console.log(`${k4}`, isPowerN(n, k4));
console.log(`${k5}`, isPowerN(n, k5));
