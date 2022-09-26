// An array of N real numbers and two integers K and L (1 ≤ K ≤ L ≤ N) are given. Find the average of array elements with the order numbers in the 
// range K to L inclusively. 

const k = 2;
const l = 10;
const array = Array.from([1, 3, 5, 7, 1, 2, 11, 0, 15, -7, 22]);
console.log(array);

let average = 0;
let count = 0;
for (const value of array) {
    if (value >= k && value <= l) {
        average += value;
        count++;
    }
}

average = average / count;
console.log(average);
