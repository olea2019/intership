// A two-digit integer is given. Output its left digit (a tens digit) and then its right digit (a ones digit). Use the operator of 
// integer division for obtaining the tens digit and the operator of taking remainder for obtaining the ones digit. 

function getRandomValue(range = 100) {
    return Math.random() * range | 0;
}

const n: number = getRandomValue(90) + 10;
console.log("n = ", n);

const leftDigit: number = Math.trunc(n / 10);
console.log("leftDigit = ", leftDigit);

const rightDigit: number = n % 10;
console.log("rightDigit = ", rightDigit);
