// 4. find all indexes of even numbers in the original array
// example: [10, 15, 20, 3] => [0, 2]

const array: number[] = [10, 15, 20, 3];

const indexOfEvenDigits: number[] = array.reduce((acc, value, index) => {
    if (value % 2 === 0) {
        acc.push(index);
    }
    return acc;
}, [] as number[]);

console.log(indexOfEvenDigits);
