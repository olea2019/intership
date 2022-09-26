// Given an array of N real numbers, output its elements in inverse order. 

function getRandomValue(range = 20) {
    return Math.random() * range | 0;
}

function getRandomArray(n = 10) {
    return Array.from({ length: n }).map(() => getRandomValue());
}

const array: Array<number> = getRandomArray(6);
console.log(array);

const arrayCopy = [...array];
const inverseArray: number[] = [];

for (let i = 0; i < array.length; i++) {
    const value: number = arrayCopy.pop()!;
    inverseArray.push(value);
}

console.log(inverseArray);
