// Given an integer independent variable x, find the value of an integer function f defined as: 
// f(x) = 2·x, if x < −2 or x > 2, −3·x otherwise

function getRandomValue(range = 5) {
    return Math.trunc(Math.random() * range);
}

function getSignedRandom(range = 5) {
    return (getRandomValue(range) + 1) * (getRandomValue(2) === 0 ? 1 : -1);
}

const x: number = getSignedRandom();
console.log("x =", x);

if (x < -2 || x > 2) {
    console.log("f(x) = 2*x :", 2 * x);
} else {
    console.log("f(x) = -3 * x:", -3 * x);
}
