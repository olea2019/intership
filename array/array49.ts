// An array of N integers is given. If the array is a permutation (i. e., if the array contains all integers in the range 1 to N) then output 0, 
// otherwise output the order number of the first inadmissible element. 

const r: number = 7;
console.log("r = ", r);
const array = Array.from([6, 7, 1, 5, 3, 0, 2, 4]);
console.log(array);

let isPermutation: boolean = false;
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i === array[j]) {
            isPermutation = true;
            break;
        }
        isPermutation = false;
    }
    if (isPermutation === false) {
        break;
    }
}

console.log(isPermutation);
