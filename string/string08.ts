// Given an integer N (> 0) and a character C, output a string that is of length N
// and contains characters C. 

function getRandomValue(range = 100) {
    return Math.random() * range | 0;
}

const n: number = getRandomValue(9) + 1;
console.log(n);
const c: string = '*';
console.log(c);

const arrayOfC = Array.from({length: n}, (value => c));
console.log(arrayOfC);
