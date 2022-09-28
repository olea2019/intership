// 4. reverse an array elements (without reverse method)

const array: number[] = [10, 35, 2, 17, 4, 9, 19];

const inversedArray: number[] = array.map((_, index, list) => list[list.length - index - 1]);

console.log(inversedArray);
