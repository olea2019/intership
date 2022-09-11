// A three-digit integer is given. Output an integer obtained from the given one by reading it from right to left. 

function getRandomValue(range = 1000) {
    return Math.random() * range | 0;
}

const n: number = getRandomValue(900) + 100;
console.log("n = ", n);

const rightDigit: number = n % 10;
const middleDigit: number = Math.trunc(n / 10) % 10;
const leftDigit: number = Math.trunc(n / 100);

const reverseN: number = rightDigit * 100 + middleDigit * 10 + leftDigit;
console.log("reverseN = ", reverseN);
