// From the beginning of the day N seconds have passed (N is integer). Find an amount of seconds passed from the beginning of the last minute.

function getRandomValue(range = 10000) {
    return Math.random() * range | 0;
}

const totalSeconds: number = getRandomValue() + 1;
console.log("totalSeconds = ", totalSeconds);

const secondsPassed: number = totalSeconds % 60;
console.log("secondsPassed = ", secondsPassed);
