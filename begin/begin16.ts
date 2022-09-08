// Two points with the coordinates x1 and x2 are given on the real axis. Find the distance between these points: |x2 − x1|.

function getRandomValue(range = 100) {
    return Math.random() * range | 0;
}

const x1: number = getRandomValue(100);
console.log(x1);

const x2: number = getRandomValue(100);
console.log(x2);

const distance: number = Math.abs(x2 - x1);
console.log(distance);
