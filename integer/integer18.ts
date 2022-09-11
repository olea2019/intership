// An integer greater than 999 is given. Using one operator of integer division and one operator of taking the remainder find a thousands digit of the 
// given integer. 

function getRandomValue(range = 1000000) {
    return Math.random() * range | 0;
}

const n: number = getRandomValue(9000) + 1000;
console.log("n = ", n);

const thousandDigit: number = Math.trunc((n % 10000) / 1000); 
console.log("thousandDigit = ", thousandDigit);
