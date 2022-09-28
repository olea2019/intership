// 1. create a list with only even numbers from an array
// example: [11, 0, 1, 2, 4, 5] => [0, 2, 4]

const array: number[] = [11, 0, 1, 2, 4, 5];

const evenArray: number[] = array.filter((value, index, list) => value % 2 === 0);
console.log(evenArray);
