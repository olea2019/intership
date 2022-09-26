// An integer L (> 0) and an array of N integers are given. Replace each series, whose length is equal to L, by one element with zero value 
// (see the series definition in Array116). 

const l = 2;
const array = Array.from([1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 6, 6]);
console.log(array);

const arrayWithoutLSeries: number[] = [];

let lengthOfSeries = 1;
for (let i = 0; i < array.length; i += lengthOfSeries) {
    lengthOfSeries = 1;

    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            lengthOfSeries++;
        }
    }

    if (lengthOfSeries === l) {
        arrayWithoutLSeries.push(0);


    } else if (lengthOfSeries < l) {
        const lengthOfSeriesCopy = lengthOfSeries;
        while (lengthOfSeries + 1 > 1) {
            arrayWithoutLSeries.push(array[i]);
            lengthOfSeries--;
        }
        lengthOfSeries = lengthOfSeriesCopy;

    } else {
        const lengthOfSeriesCopy2 = lengthOfSeries;
        while (lengthOfSeries >= 1) {
            arrayWithoutLSeries.push(array[i]);
            lengthOfSeries--;
        }
        lengthOfSeries = lengthOfSeriesCopy2;
    }
}

console.log(arrayWithoutLSeries);