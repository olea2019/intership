// Write a real-valued function Ln1(x, ε) (x and ε are real numbers, |x| < 1, ε > 0) that returns an approximate value of the function ln(1 + x) defined 
// as follows: ln(1 + x) = x − (x**2)/2 + (x**3)/3 − … + (−1)**n · x**(n+1)/(n+1) + … . Stop adding new terms to the sum when the absolute value of the next term 
// will be less than ε. Using this function, find the approximate values of the function ln(1 + x) at a given point x for six given ε.

const x: number = Math.random();
const k2: number = 0.1;
const k3: number = 0.01;
const k4: number = 0.002
const k5: number = 0.0001;
console.log("x = ", x);
console.log(k2, ln1(x, k2));
console.log(k3, ln1(x, k3));
console.log(k4, ln1(x, k4));
console.log(k5, ln1(x, k5));
console.log('built in', Math.log(1 + x));

function ln1(x: number, epsilon: number): number {
    let previous: number = -10;
    let current: number = x;
    let i: number = 1;
    while(Math.abs(current - previous) >= epsilon) {
        previous = current;
        current += ((-1) ** i) * ((x ** (i + 1)) / (i + 1));
        i++;
    }
    return current;
}
