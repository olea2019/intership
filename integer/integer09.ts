// A three-digit integer is given. Using one operator of integer division find first digit of the given integer (a hundreds digit).

function getRandomValue(range = 1000) {
    return Math.random() * range | 0;
}

const n: number = getRandomValue(900) + 100;
console.log("n = ", n);

const hundreDsigit: number = Math.trunc(n / 100);
console.log("hundreDsigit = ", hundreDsigit);
