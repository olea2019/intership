// Write a real-valued function Power4(x, a, ε) (x, a, ε are real numbers, |x| < 1, a, ε > 0) that returns an approximate value of the 
// function (1 + x)**a defined as: (1 + x)**a = 1 + a·x + a·(a−1)·x**2/(2!) + … + a·(a−1)·…·(a−n+1)·x**n/(n!) + … .Stop adding new terms 
// to the sum when the absolute value of the next term will be less than ε. Using this function, find the approximate values of the 
// function (1 + x)**a at a given point x for a given exponent a and six given ε.

function getRandomValue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const x: number = Math.random();
const a: number = getRandomValue() + 1; 
const k2: number = 0.1;
const k3: number = 0.01;
const k4: number = 0.002
const k5: number = 0.0001;
console.log("x =", x);
console.log("a =", a);
console.log(k2, power4(x, a, k2));
console.log(k3, power4(x, a, k3));
console.log(k4, power4(x, a, k4));
console.log(k5, power4(x, a, k5));
console.log('built in', (1 + x) ** a);

function power4(x: number, a: number ,epsilon: number): number {
    let previous: number = -10;
    let current: number = 1 + a * x;
    let i: number = 1;
    let product: number = a;
    let factorial: number = 1;
    while(Math.abs(current - previous) >= epsilon) {
        product *= a - i;
        factorial *= i + 1;
        previous = current;
        current += product * (x ** (i + 1)) / factorial; 
        i++;
    }
    return current;
}