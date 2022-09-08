// The coordinates (x1, y1) and (x2, y2) of two points are given. Find the distance between the points: ((x2 − x1)**2 + (y2 − y1)**2) / 1/2

function getRandomValue(range = 100) {
    return Math.random() * range | 0;
}

const x1: number = getRandomValue(100);
console.log("x1 = ", x1);

const y1: number = getRandomValue(100);
console.log("y1 = ", y1);

const x2: number = getRandomValue(100);
console.log("x2 = ", x2);

const y2: number = getRandomValue(100);
console.log("y2 = ", y2);

const distance: number = ((x2 - x1)**2 + (y2 - y1)**2) / 1/2;
console.log("distance = ", distance);
