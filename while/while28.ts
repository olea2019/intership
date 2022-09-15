// A real number ε (> 0) is given. A sequence of real numbers AK is defined  as: A1 = 2, AK = 2 + 1/AK−1, K = 2, 3, … .
// Find the first index K such that the inequality |AK − AK−1| < ε is fulfilled. Output the index K and the terms AK−1 and AK.

const epsilon: number = Math.random() / 10;
console.log("epsilon = ", epsilon);

let k: number = 1;
let a1: number = 2;
let a2: number = 0;
while (Math.abs(a1 - a2) >= epsilon) {
    k ++;
    a2 = a1;
    a1 = 2 + 1 / a2;
}

console.log("k = ", k);
console.log("a2 = ", a2);
console.log("a1 = ", a1);
