// An integer N (> 0) is given. A sequence of real numbers AK is defined as: 
// A0 = 1, AK = (AK−1 + 1)/K, K = 1, 2, … .
// Output terms A1, A2, …, AN of the sequence. 

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const n = getRandomValue() + 1;
console.log("n = ", n);

let previousA: number = 1;

for (let i = 1; i <= n; i++) {
    let a: number = (previousA + 1) / i;
    previousA = a;
    console.log(`A${i} =`, a);
}
