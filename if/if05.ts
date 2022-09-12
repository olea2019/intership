// three integers are given. Find the amount of positive and amount of negative integers in the input data

function getRandomValue(range = 100) {
    return Math.trunc(Math.random() * range);
}

function getSignedRandom(range = 100) {
    return (getRandomValue(range) + 1) * (getRandomValue(2) === 0 ? 1 : -1);
}

const a: number = getSignedRandom();
console.log("a =", a);

const b: number = getSignedRandom();
console.log("b =", b);

const c: number = getSignedRandom();
console.log("c =", c);

let amountOfPositive: number = 0;
let amountOfnegative: number = 3;

if (a > 0) {
    amountOfPositive += 1;
    amountOfnegative -= 1;
}
if (b > 0) {
    amountOfPositive += 1;
    amountOfnegative -= 1;
}
if (c > 0) {
    amountOfPositive += 1;
    amountOfnegative -= 1;
}

console.log("amountOfPositive =", amountOfPositive);
console.log("amountOfnegative =", amountOfnegative);
