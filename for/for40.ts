// Integers A and B (A < B) are given. Output all integers in the range A to B, 
// with the number A being output once, the number A + 1 being output twice, and so on. 

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const a: number = getRandomValue() + 1;
console.log("a = ", a);
const b: number = a + getRandomValue();
console.log("b = ", b);

for (let i = a, iteration = 1; i <= b; i++, iteration ++) {
    for (let y = 1; y <= iteration; y ++) {
        console.log(i);
    }
}
