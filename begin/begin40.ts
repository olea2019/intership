// Solve a system of linear equations A1·x + B1·y = C1, A2·x + B2·y = C2 with given coefficients A1, B1, C1, A2, B2, C2 provided that the system has the 
// only solution. Use the following formulas: x = (C1·B2 − C2·B1)/D, y = (A1·C2 − A2·C1)/D, where D = A1·B2 − A2·B1.


function getRandomValue(range = 100) {
    return Math.random() * range | 0;
}

const a1: number = getRandomValue(10);
console.log("a1 = ", a1);

const b1: number = getRandomValue(10);
console.log("b1 = ", b1);

const c1: number = getRandomValue(10);
console.log("c1 = ", c1);

const a2: number = getRandomValue(10);
console.log("a2 = ", a2);

const b2: number = getRandomValue(10);
console.log("b2 = ", b2);

const c2: number = getRandomValue(10);
console.log("c2 = ", c2);

const d: number = a1 * b2 - a2 * b1;
const x: number = (c1 * b2 - c2 * b1) / d;
const y: number = (a1 * c2 - a2 * c1) / d;

const res: boolean = a1 * x + b1 * y == c1;
console.log(res);
const res2: boolean = a2 * x + b2 * y == c2;
console.log(res2);
