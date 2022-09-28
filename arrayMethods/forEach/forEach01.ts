// 1. count all even numbers in an array
// example: [11, 0, 1, 2, 4, 5] => 3

const array: number[] = [11, 0, 1, 2, 4, 5];

let count = 0;
array.forEach(value => {
    if (value % 2 === 0) {
        count++;
    }
})

console.log(count);
