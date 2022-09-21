// Write a real-valued function Exp1(x, ε) (x and ε are real numbers, ε > 0) that returns an approximate value of the function exp(x) 
// defined as follows: exp(x) = 1 + x + x**2/(2!) + x**3/(3!) + … + x**n/(n!) + …(n! = 1·2·…·n). Stop adding new terms to the sum when the value of the 
// next term will be less than ε. Using this function, find the approximate values of the function exp(x) at a given point x for six given ε.

function getRandomValue(range = 20) {
    return Math.trunc(Math.random() * range);
}

const x: number = getRandomValue();
const k2: number = 0.1;
const k3: number = 0.01;
const k4: number = 0.002
const k5: number = 0.0001;
console.log("x = ", x);
console.log(k2, exp1(x, k2), Math.abs(exp1(x, k2) - Math.exp(x)));
console.log(k3, exp1(x, k3), Math.abs(exp1(x, k3) - Math.exp(x)));
console.log(k4, exp1(x, k4), Math.abs(exp1(x, k4) - Math.exp(x)));
console.log(k5, exp1(x, k5), Math.abs(exp1(x, k5) - Math.exp(x)));
console.log('built in', Math.exp(x));

function exp1(x: number, epsilon: number): number {
    let previous: number = -10;
    let current: number = 1;
    let factorial: number = 1;
    let i: number = 1;
    while(Math.abs(current - previous) >= epsilon) {
        factorial *= i;
        previous = current;
        current += x ** i / factorial;
        i++;
    }
    return current;
}
