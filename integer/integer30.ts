// Given a year (as a positive integer), find the respective number of the century. Note that, for example, 20th century began with the year 1901.

function getRandomValue(range = 2022) {
    return Math.random() * range | 0;
}

let year: number = getRandomValue() + 1;
console.log("year = ", year);

let i: number = 0;
