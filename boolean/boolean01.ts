//Given integer A, verify the following proposition: ―The number A is positive. 

function getRandomValue (range = 100) {
    return Math.trunc(Math.random() * range);
}

function getSignedRandom(range = 100) {
    return (getRandomValue(range) + 1) * (getRandomValue(2) === 0 ? 1 : -1);
}

const a: number = getSignedRandom();
console.log(a);

const b: boolean = a > 0;
console.log(b);
