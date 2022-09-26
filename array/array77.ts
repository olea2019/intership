// Given an array of N real numbers, replace each local minimum with its square (an array element is called the local minimum if it is smaller 
// than its neighbors).

function getRandomValue(range = 20) {
    return Math.random() * range | 0;
}

function getRandomArray(n = 10) {
    return Array.from({ length: n }).map(() => getRandomValue());
}

const array: Array<number> = getRandomArray(7);
console.log(array);
const arrayCopy = [...array];

const localMin: number[] = [];

for (const indexString in array) {
    const index = parseInt(indexString, 10);

    if (index === 0 && array[index] < array[index + 1]) {
        localMin.push(array[index]);
        continue;
    }

    if (index === array.length - 1 && array[index - 1] > array[index]) {
        localMin.push(array[index]);
        continue;
    }

    if (array[index - 1] > array[index] && array[index] < array[index + 1]) {
        localMin.push(array[index]);
    }
}
console.log("local min =" , localMin);

let localMinLength: number = localMin.length;
for (let index = 0; index < localMinLength; index++) {
    let localMinvalue = localMin.shift();
    for (let i = 0; i <= array.length; i++) {
        if (arrayCopy[i] === localMinvalue) {
            arrayCopy[i] = (arrayCopy[i]) ** 2;
        }
    }
}
console.log(arrayCopy);
