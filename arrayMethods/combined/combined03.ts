//3. find the sum of all even elements in the array
// example: [10, 15, 20, 3] => 30

const array: number[] =  [10, 15, 20, 3];
const sum: number = array.reduce((acc, value) => {
    if (value % 2 === 0) {
        acc += value;
    }
    return acc;
}, 0);

console.log(sum);
