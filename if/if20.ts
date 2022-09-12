// Three points A, B, C on the real axis are given. Determine whether B or C is closer to A. Output the nearest point and its distance from A.

function getRandomValue (range = 20) {
    return Math.trunc(Math.random() * range);
}

const a: number = getRandomValue();
console.log("a =", a);

const b: number = getRandomValue();
console.log("b =", b);

const c: number = getRandomValue();
console.log("c =", c);

const distanceToB: number = Math.abs(a - b);
const distanceToC: number = Math.abs(a - c);

const nearestPoint: number = Math.min(distanceToB, distanceToC);

console.log("distance :", nearestPoint);

if (nearestPoint === distanceToB) {
    console.log("nearest point is b");
} else {
    console.log("nearest point is c")}
