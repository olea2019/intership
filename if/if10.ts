// The values of two integer variables A and B are given. If the values are not equal then assign the sum of given values to each variable, otherwise assign 
// zero value to each variable. Output the new values of the variables A and B

function getRandomValue (range = 10) {
    return Math.trunc(Math.random() * range);
}

let a: number = getRandomValue() + 1;
console.log("a =", a);

let b: number = getRandomValue() + 1;
console.log("b =", b);

if ( a === b) {
    a = 0;
    b = 0;
} else {
    a = a + b;
    b = a;
}

console.log("a =", a);
console.log("b =", b);
