// Given an array of N real numbers, perform the left cyclic shift of array elements on one position by assigning initial values of AN, AN−1, …, A2, A1 
// to elements AN−1, AN−2, …, A1, AN respectively.

const array = Array.from([0, 1, 2, 3, 4, 5, 6, 7])
console.log(array);

const arrayLeftShift: number[] = [];

for (let i = 0; i < array.length; i++) {
    if (i === 0) {
        arrayLeftShift[0] = array[array.length - 1];
    }
    else {
        arrayLeftShift[i] = array[i - 1];
    }
}
console.log(arrayLeftShift);
