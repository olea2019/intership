// Write a function TimeToHMS(T) that converts a time interval T (in seconds) into the ―hours H, minutes M, seconds S‖ format and returns the 
// values H, M, S (T, H, M, S are integers). Using this function, find the amount of hours, minutes and seconds for each of five given time 
// intervals T1, T2, …, T5.

function getRandomValue(range = 10000) {
    return Math.trunc(Math.random() * range);
}

const t1: number = 4505;
const t2: number = getRandomValue() + 100;
const t3: number = getRandomValue() + 100;
const t4: number = getRandomValue() + 100;

function timeToHMS(t: number) {
    let hours: number = 0;
    let minutes: number = 0;
    let seconds: number = t;

    while (seconds - 60 > 0) {
        seconds -= 60;
        minutes++;
    }

    while (minutes - 60 > 0) {
        minutes -= 60;
        hours++;
    }
    return { hours, minutes, seconds };
}

console.log(`timeToHMS(${t1}) =`, timeToHMS(t1));
console.log(`timeToHMS(${t2}) =`, timeToHMS(t2));
console.log(`timeToHMS(${t3}) =`, timeToHMS(t3));
console.log(`timeToHMS(${t4}) =`, timeToHMS(t4));
