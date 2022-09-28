// 2. count all even numbers in array
// example: [11, 0, 1, 2, 4, 5] => 3

const array: number[] = [11, 0, 1, 2, 4, 5];

const evenArray: number[] = array.filter((value, index, list) => value % 2 === 0);
console.log(evenArray.length);
