// Write a real-valued function Cos1(x, ε) (x and ε are real numbers, ε > 0) that returns an approximate value of the function cos(x) defined as follows: 
// cos(x) = 1 − x**2/(2!) + x**4/(4!) − … + (−1)n·x**(2·n)/((2·n)!) + … .Stop adding new terms to the sum when the absolute value of the next term will be less 
// than ε. Using this function, find the approximate values of the function cos(x) at a given point x for six given ε. 

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const x: number = getRandomValue();
const k2: number = 0.1;
const k3: number = 0.01;
const k4: number = 0.002
const k5: number = 0.0001;
console.log("x = ", x);
console.log(k2, cos1(x, k2));
console.log(k3, cos1(x, k3));
console.log(k4, cos1(x, k4));
console.log(k5, cos1(x, k5));
console.log('built in', Math.cos(x));

function cos1(x: number, epsilon: number): number {

    let previous: number = 1;
    let current: number = 1;
    let i: number = 0;
    while (Math.abs(previous / current) > epsilon) {
        i++;
        previous = (-previous * x ** 2) / ((2 * i - 1) * (2 * i));
        current += previous;
    }
    return current;
}