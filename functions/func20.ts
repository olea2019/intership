// Write a real-valued function Fact2(N) that returns a double factorial N!!: N!! = 1·3·5·…·N, if N is an odd number; N!! = 2·4·6·…·N otherwise
// (N is a positive integer; the real return type allows to avoid the integer overflow during the calculation of the double factorials for large 
// values of N). Using this function, find the double factorials of five given integers.

function getRandomValue(range = 20) {
    return Math.trunc(Math.random() * range);
}

const k1: number = getRandomValue();
const k2: number = getRandomValue();
const k3: number = getRandomValue();
const k4: number = getRandomValue() + 1;
const k5: number = getRandomValue() + 1;
console.log(k1, fact2(k1));
console.log(k2, fact2(k2));
console.log(k3, fact2(k3));
console.log(k4, fact2(k4));
console.log(k5, fact2(k5));


function fact2(n: number): number {
    let rate: number = 0;
    let factorial: number = 1;

    while (n - rate > 0) {
        if (n % 2 === 0) {
            factorial *= n - rate;
            rate += 2;
        }
        if (n % 2 === 1) {
            factorial *= n - rate;
            rate += 1;
        }
    }
    return factorial;
}