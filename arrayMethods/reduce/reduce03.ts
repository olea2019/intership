// 3. reverse an array elements (without reverse method)

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reverseArray = array.reduce((acc, value) => [value, ...acc], [] as number[]);

console.log(reverseArray);
