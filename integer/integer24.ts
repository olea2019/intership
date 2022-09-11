// Days of week are numbered as: 0 — Sunday, 1 — Monday, 2 —Tuesday, …, 6 — Saturday. An integer K in the range 1 to 365 is given. Find 
// the number of day of week for K-th day of year provided that in this year January 1 was Monday. 

function getRandomValue(range = 365) {
    return Math.random() * range | 0;
}

const k: number = getRandomValue() + 1;
console.log("k = ", k);

const day: number = k % 7;
console.log("day number : ", day);
