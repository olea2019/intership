// Variables A, B, C are given. Change values of the variables by moving the given value of A into the variable C, the given value of C into the variable B, 
// and the given value of B into the variable A. Output the new values of A, B, C

function getRandomValue(range = 100) {
    return Math.random() * range | 0;
}

let a: number = getRandomValue(100);
console.log("a = ", a);

let b: number = getRandomValue(100);
console.log("b = ", b);

let c: number = getRandomValue(100);
console.log("c = ", c);

const d: number = c;

c = a;
a = b;
b = d;
console.log("after moving:");
console.log("a = ", a);
console.log("b = ", b);
console.log("c = ", c);
