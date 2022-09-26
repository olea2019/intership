// An array A of N (≤ 15) integers is given. Write elements of A with order numbers that are multiples of 3 (3, 6, …) to a new array B and output 
// the size of array B and all its elements. Do not use conditional statements.

function getRandomValue(range = 20) {
    return Math.random() * range | 0;
}

function getRandomArray(n = 10) {
    return Array.from({ length: n }).map(() => getRandomValue());
}

const n: number = 15;
const a: Array<number> = getRandomArray(n);
console.log(a);


const b: number[] = [];

for(let i = 0; i < a.length; i += 3) {
    b.push(a[i]);
}
console.log(b);
