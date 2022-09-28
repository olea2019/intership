// 1. Create an array where each element should be the square of the original element
// example: [1, 10, 5, 4] => [1, 100, 25, 16]

const array = [1, 10, 5, 4];

const squareArray: number[] = array.map((value: number) => value ** 2);

console.log(squareArray);
