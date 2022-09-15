// An integer N (> 0) is given. Determine whether its decimal representation contains a digit "2" or not, and output True or False respectively. 
// Use the operators of integer division and taking the remainder after integer division.

function getRandomValue(range = 10000) {
    return Math.trunc(Math.random() * range);
}

const n: number = getRandomValue() + 1;
console.log("n = ", n);

let nCopy: number = n;
let has2: boolean = false;

while (nCopy !== 0) {
    const lastDigit = nCopy % 10;
    if (lastDigit == 2) {
        has2 = true;
        break;
    }
    nCopy = Math.trunc(nCopy / 10);
}
console.log(has2);
