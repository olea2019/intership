// 1. count the product of all elements in an array
// example: [10, 20, 3] => 600

const array: number[] = [10, 20, 3];

const productsOfArray: number = array.reduce((acc, value) => acc * value, 1);
console.log(productsOfArray);
