// Given an array of N real numbers, find the minimum among its local maximums (see the local maximum definition in Array33).

function getRandomValue(range = 20) {
    return Math.random() * range | 0;
}

function getRandomArray(n = 10) {
    return Array.from({ length: n }).map(() => getRandomValue());
}

const array: Array<number> = getRandomArray(10);
console.log(array);

const localMax: number[] = [];

for (const indexString in array) {
    const index = parseInt(indexString, 10);

    if (index === 0 && array[index] > array[index + 1]) {
        localMax.push(array[index]);
        continue;
    }

    if (index === array.length - 1 && array[index - 1] < array[index]) {
        localMax.push(array[index]);
        continue;
    }
    
    if (array[index - 1] < array[index] && array[index] > array[index + 1]) {
        localMax.push(array[index]);
    }
}
console.log(localMax);

let min = Number.MAX_SAFE_INTEGER;
for (const value of localMax) {
    if (value < min) {
        min = value;
    }
}
console.log(min);
