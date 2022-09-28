// 3. create a list with only numbers smaller than left neighbor in the original array
// example: [10, 35, 2, 17, 4, 9, 19] => [2, 4]

const array: number[] = [10, 35, 2, 17, 4, 9, 19];
const smallerArray: number[] = array.filter((value, index, list) => value < list[index - 1]);
console.log(smallerArray);
