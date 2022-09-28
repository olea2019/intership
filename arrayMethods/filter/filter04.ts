// 4. create a list with only local maximums of the original array (local maximum is an element greater than any its neighbors)
// example: [10, 35, 2, 17, 4, 9, 19] => [35, 17]

const array: number[] = [10, 35, 2, 17, 4, 9, 19];
const localMaximums: number[] = array.filter((value, index, list) => value > list[index - 1] && value > list[index + 1]);
console.log(localMaximums);
