// Given an array A of N real numbers, find the minimum among elements with even order numbers: A2, A4, A6, … . 

function getRandomValue(range = 20) {
    return Math.random() * range | 0;
}

function getRandomArray(n = 10) {
    return Array.from({ length: n }).map(() => getRandomValue());
}

const array: Array<number> = getRandomArray(6);
console.log(array);

const evenIndexArray: number[] = [];

for (let index = 0; index < array.length / 2; index++) {
    evenIndexArray.push(array[index * 2]);
}

console.log(evenIndexArray);

let min = Number.MAX_SAFE_INTEGER;
for (const value of evenIndexArray) {
    if (value < min) {
        min = value;
    }
}

console.log(min);
