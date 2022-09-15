// The skier began trainings having run 10 km. Each next day he increased the run distance by P percent from the distance of the last day.
// A real number P is given, 0 < P < 50). Find, how many days K it will take for a total run to exceed 200 km. 
// Output K (as an integer) and the total run S (as a real number). 

function getRandomValue(range = 100) {
    return Math.trunc(Math.random() * range);
}

const firstDay = 10;
const p: number = getRandomValue(49) + 1;
console.log("p = ", p);

let firstDayCopy: number = firstDay;
let i: number;
let rate: number = 0;
let sum: number = 0;

while (firstDayCopy <= 200) {
    i = p * firstDay / 100;    
    firstDayCopy += i;
    sum += firstDayCopy;
    rate++;
}

console.log("sum = ", sum);
console.log("k = ", firstDayCopy);
