// 6. find the longest consecutive part of the array what is sorted
// example: [1, 2, 3, 1, 2, 3, 4, 5, 6, 1, 2, 3] => [1, 2, 3, 4, 5, 6]

const array: number[] =  [1, 2, 3, 1, 2, 3, 4, 5, 6, 1, 2, 3];
const arrayCopy = [...array];

const uniqueSortedArray: number[] = arrayCopy.sort((a, b) => a - b).filter((value, index, list) => value !== list[index + 1]);
console.log(uniqueSortedArray);
