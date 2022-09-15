// Positive integers A and B (A < B) are given. Output all integers in the range A to B, with an integer of a value K being output K times 
// (for example, the number 3 must be output 3 times).

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const a: number = getRandomValue() + 1;
console.log("a = ", a);
const b: number = a + getRandomValue();
console.log("b = ", b);

for (let i = a; i <= b; i++) {
    for (let y = 1; y <= i; y ++) {
        console.log(i);
    }
}
