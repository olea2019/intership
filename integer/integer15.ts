// A three-digit integer is given. Output an integer obtained from the given one by exchange a tens digit and a hundreds digit (for example, 123 will be 
// changed to 213).

function getRandomValue(range = 1000) {
    return Math.random() * range | 0;
}

const n: number = getRandomValue(900) + 100;
console.log("n = ", n);

const rightDigit: number = n % 10;
const middleDigit: number = Math.trunc(n / 10) % 10;
const leftDigit: number = Math.trunc(n / 100);

const changedN: number = middleDigit * 100 + leftDigit * 10 + rightDigit;
console.log("changedN = ", changedN);
