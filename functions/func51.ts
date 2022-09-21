// Write a function IncTime(H, M, S, T) that increases a time interval in hours H, minutes M, seconds S on T seconds and returns new values of hours, 
// minutes, and seconds (all numbers are positive integers). Having input hours H, minutes M, seconds S (as integers) and an integer T and using the 
// IncTime function, increase the given time interval on T seconds and output new values of H, M, S. 

function getRandomValue(range = 1000) {
    return Math.trunc(Math.random() * range);
}

const hours: number = 1;
const minutes: number = 15;
const seconds: number = 5;
const t1: number = 60;
const t2: number = getRandomValue() + 100;

function timeToHMS(t: number) {
    let hours: number = Math.trunc(t / 3600);
    let minutes: number = Math.trunc((t % 3600) / 60);
    let seconds: number = t % 60;
    return { hours, minutes, seconds };
}

function incTime(hours: number, minutes: number, seconds: number, t: number) {
    const allSeconds: number = (hours * 3600) + (minutes * 60) + seconds + t;
    const newTime = timeToHMS(allSeconds);
    return newTime;

}

console.log(`incTime(${t1}) =`, incTime(hours, minutes, seconds, t1));
console.log(`incTime(${t2}) =`, incTime(hours, minutes, seconds, t2));
