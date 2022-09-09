//Given the diameter d of a circle, find the length L of the circle: L = π·d. Use 3.14 for a value of π

function getRandomValue(range = 100) {
    return Math.random() * range | 0;
}

const d: number = getRandomValue(10);
console.log(d);

const l = Math.PI * d;
console.log(l);
