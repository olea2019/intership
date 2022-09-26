// An array A of N real numbers is given. Output array elements with even order numbers (in ascending order of indices) and then output array elements 
// with odd order numbers (in ascending order of indices too): A2, A4, A6, …, A1, A3, A5, … .Do not use conditional statements. 

function getRandomValue(range = 20) {
    return Math.random() * range | 0;
}

function getRandomArray(n = 10) {
    return Array.from({ length: n }).map(() => getRandomValue());
}

const array: Array<number> = getRandomArray(6);
console.log(array);

const evenIndexArray: number[] = [];
const oddindexArray: number[] = [];

for (let index = 0; index < array.length / 2; index++) {
    evenIndexArray.push(array[index * 2]);
}

for (let index = 0; index <= array.length / 2 - 1; index++) {
    oddindexArray.push(array[index * 2 + 1]);
}

const evenOddArray: number[] = [...evenIndexArray,...oddindexArray];
console.log(evenOddArray);
