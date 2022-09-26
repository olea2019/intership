// An array A of N (≤ 6) real numbers is given. Sort the array in ascending order by using the exchange sort method (the bubble sorting): compare each 
// pair of two adjacent elements (A1 and A2, A2 and A3, and so on) and exchange their values in case the left element is greater than the right one; 
// repeat N − 1 times such array pass. Output all array elements after each pass for checking results. Note that the amount of analyzed pairs of the array 
// elements can be reduced by 1 after each pass.

const array = Array.from([4, 2, 8, 3, 1, 0, 9, 6, 5, 7]);
console.log(array);

const orderedArray = [...array];

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
        if (orderedArray[j] > orderedArray[j + 1]) {
            const value = orderedArray[j];
            orderedArray[j] = orderedArray[j + 1];
            orderedArray[j + 1] = value;
        }
    }
    console.log(orderedArray);
}
