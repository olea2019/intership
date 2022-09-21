// Write a real-valued function RingS(R1, R2) that returns the area of a ring bounded by a concentric circles of radiuses R1 and R2 (R1 and R2 are 
// real numbers, R1 > R2). Using this function, find the areas of three rings with given outer and inner radiuses. Note that the area of a circle 
// of radius R can be found by formula S = π·R**2. Use 3.14 for a value of π.

function getRandomValue(range = 5) {
    return Math.trunc(Math.random() * range);
}

const r1: number = getRandomValue() + 1;
console.log("r1 = ", r1);
const r2: number = getRandomValue() + 1;
console.log("r2 = ", r2);


function ringS(r1: number, r2: number): number {
    const areaRing = Math.PI * Math.abs(r1**2 - r2**2);
    return areaRing;
}

console.log(ringS(r1, r2));
