// A real number R and an array of N real numbers are given. Find two adjacent elements whose sum of values is the nearest to the number R and 
// output these elements in ascending order of its indices (see the definition of two nearest numbers in Array40). 

const r: number = 10;
console.log("r = ", r);
const array = Array.from([0, 1, 6, 1, 22, 1, 8, 5]);
console.log(array);

let sum: number = 0;
let oldSum: number = sum;
let element1: number = 0;
let element2: number = 0;

for (let i = 0; i < array.length; i++) {
    sum = array[i] + array[i + 1];
    if (Math.abs(r - sum) <= Math.abs(r - oldSum)) {
        element1 = array[i];
        element2 = array[i + 1];
    }
    oldSum = sum;
}

console.log(element1, element2);
