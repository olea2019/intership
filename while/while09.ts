// Given an integer N (> 1), find the smallest integer K such that the inequality 3**K> N is fulfilled. 

function getRandomValue(range = 50) {
    return Math.trunc(Math.random() * range);
}

const n: number = getRandomValue() + 2;
console.log("n = ", n);

let k: number = 1;

while(3**k < n) {
    k ++;
}
console.log("k = ", k);
