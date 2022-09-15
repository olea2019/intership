//A real number A and an integer N (> 0) are given. Using one loop-statement compute and output powers A**K for all integer exponents K in the range 1 to N.

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const a: number = getRandomValue() + 1;
console.log("a = ", a);
const n: number = getRandomValue() + 1;
console.log("n = ", n);

for ( let i = 1; i <= n; i ++) {
    const powers: number = a**i;
    console.log(`a**${i} =`, powers);
}
