// Two positive integers N and K are given. Using addition and subtraction only, find a quotient of the integer division N on K 
// and also a remainder after this division.

function getRandomValue(range = 20) {
    return Math.trunc(Math.random() * range);
}

const n: number = getRandomValue() + 1;
console.log("n = ", n);
const k: number = n + getRandomValue();
console.log("k = ", k);

let substract: number = k;
let rate: number = 0;

while (substract >= n) {
    substract -= n;
    rate++;
    console.log(substract);
}
console.log(`${k} / ${n} = ${rate},${substract}`);
