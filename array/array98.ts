// Given an array of N integers, remove all elements whose values appear less than three times in the array. Output the size of the 
// changed array and all its elements. 

const array = Array.from([1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 7, 7, 7]);
console.log(array);

const changedArray: number[] = [];

for ( let i = 0; i < array.length ;i++) {
    let count = 1;
    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
            count++;
        }
    }

    if (count >= 3) {
        changedArray.push(array[i]);
    }
}
console.log(changedArray);
