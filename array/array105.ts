// An array of N real numbers and two integers K and M (1 ≤ K ≤ N, 1 ≤ M ≤ 10) are given. Insert M new elements with zero value after 
// an element with the order number K. 

const k = 5;
const m = 3;
const array = Array.from([5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 5])
console.log(array);

const arrayWithM0: number[] = [];

for ( let i = 0; i < array.length; i++) {
    let mCopy = m;
    arrayWithM0.push(array[i]);
    if (array[i] === k) {
        while(mCopy > 0) {
            arrayWithM0.push(0);
            mCopy--;
        }
    }
}
console.log(arrayWithM0);
