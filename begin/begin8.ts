//Given two numbers a and b, find their average: (a + b)/2

function getRandomValue(range = 100) {
    return Math.random() * range | 0;
}

const a: number = getRandomValue(100);
console.log(a);

const b: number = getRandomValue(100);
console.log(b);

const average: number = (a + b) / 2;
console.log(average);
