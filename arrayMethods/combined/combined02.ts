// 2. create a sub array from the original array containing all elements between the first minimum element and the last minimum element 
// example: [10, 1, 20, 2, 30, 56, 5, 1, 40, 20, 25, 32, 1, 2] => [1, 20, 2, 30, 56, 5, 1, 40, 20, 25, 32, 1]

const array: number[] = [10, 1, 20, 2, 30, 56, 5, 1, 40, 20, 25, 32, 1, 2];

const min = Math.min(...array);

const indexFirstMin = array.findIndex((value, index) => value === min);
const indexLastMin = array.lastIndexOf(min);

const elemntsBetweenMins: number[] = [];

for (let i = indexFirstMin; i < indexLastMin + 1; i++) {
    elemntsBetweenMins.push(array[i]);
}
console.log(elemntsBetweenMins);
