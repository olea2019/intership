// 5. count all maximum numbers in an array
// example: [10, 2, 3, 4, 10, 5, 10] => 3 (max is 10, and it is present 3 times in the array)

const array: number[] = [10, 2, 3, 4, 10, 5, 10];

const max = Math.max(...array);
const localMaximums: number[] = array.filter(value => value === max);
console.log(`max is ${max} and it is present ${localMaximums.length} times in the array`);
