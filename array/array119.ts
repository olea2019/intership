// Given an array of N integers, increase each series of equal numbers of the array by one element (see the series definition in Array116). 

const array = Array.from([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]);
console.log(array);

const arrayWithLongerSeries: number[] = [];

for (let i = 0; i < array.length; i++) {
        arrayWithLongerSeries.push(array[i]);
    if (array[i] !== array[i + 1]) {
        arrayWithLongerSeries.push(array[i]);
    }
}

console.log(arrayWithLongerSeries);
