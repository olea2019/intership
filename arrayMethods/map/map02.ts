// 2. Create an array where each element should be the last digit of the original element (without sign)
// example: [1, -4, 20, 32, -33] => [1, 4, 0, 2, 3]

const array: number[] = [1, -4, 20, 32, -33];

const lastDigit: number[] = array.map((value) => {
    if (Math.sign(value) === -1) {
        return value % 10 * -1;
    } else {
        return value % 10;
    }
})

console.log(lastDigit);
