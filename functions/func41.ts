// Write a real-valued function Sin1(x, ε) (x and ε are real numbers, ε > 0) that returns an approximate value of the function sin(x) defined as 
// follows: sin(x) = x − x**3/(3!) + x**5/(5!) − … + (−1)n·x**(2·n+1)/((2·n+1)!) + … .Stop adding new terms to the sum when the absolute value of the next
// term will be less than ε. Using this function, find the approximate values of the function sin(x) at a given point x for six given ε. 

const x: number = 2 / 5;
const k2: number = 0.1;
const k3: number = 0.01;
const k4: number = 0.002
const k5: number = 0.0001;
console.log("x = ", x);
console.log(k2, sin1(x, k2));
console.log(k3, sin1(x, k3));
console.log(k4, sin1(x, k4));
console.log(k5, sin1(x, k5));
console.log('built in', Math.sin(x));

function sin1(x: number, epsilon: number): number {
    let previous: number = -10;
    let current: number = x;
    let factorial: number = 2;
    let i: number = 1;
    while(Math.abs(current - previous) >= epsilon) {
        factorial *= 2 * i + 1;
        previous = current;
        current += ((-1) ** i) * ((x ** (2 * i + 1)) / factorial);
        i++;
    }
    return current;
}