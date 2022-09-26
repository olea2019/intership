// Given an array of N real numbers (N is an even number), exchange values of the first half and the second half of its elements.

function getRandomValue(range = 20) {
    return Math.random() * range | 0;
}

function getRandomArray(n = 10) {
    return Array.from({ length: n }).map(() => getRandomValue());
}

const array: Array<number> = getRandomArray(7);
console.log(array);

const changedArray: number[] = [];

for (let i = Math.trunc(array.length / 2); i < array.length; i++) {
    changedArray.push(array[i]);
}

for (let i = 0; i < Math.trunc(array.length / 2); i++) {
    changedArray.push(array[i]);
}
console.log(changedArray);