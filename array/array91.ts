// An array of N real numbers and two integers K and L (1 ≤ K < L ≤ N) are given. Remove elements with the order numbers in the range K to 
// Linclusively from the array and output the size of the changed array and all its elements. 

const k = 5;
const l = 8;
const array = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
console.log(array);

const arrayWithoutKL: number[] = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] < k || array[i] > l) {
        arrayWithoutKL.push(array[i]);
    }
}

console.log(arrayWithoutKL.length, arrayWithoutKL);
