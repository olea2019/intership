// 2. count the average of all numbers in an array
// example: [2, 10, 5, 1, 3, 9] => 5, [0, 10] => 5

const array: number[] = [2, 10, 5, 1, 3, 9];

const sum: number = array.reduce((acc, value) => acc + value, 0);
const average = sum / array.length;
console.log(average);
