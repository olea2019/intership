// A centigrade temperature T is given. Convert it into a Fahrenheit temperature. The centigrade temperature TC and the Fahrenheit temperature TF
// are connected as: TC = (TF − 32)·5/9

function getRandomValue(range = 100) {
    return Math.random() * range | 0;
}

const tCentigrade: number = getRandomValue(100);
console.log("tCentigrade = ", tCentigrade);

const tFahrenheit: number = tCentigrade / (5 / 9) + 32;
console.log("tFahrenheit = ", tFahrenheit);
