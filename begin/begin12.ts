// The legs a and b of a right triangle are given. Find the hypotenuse c and the perimeter P of the triangle: c = (a**2 + b**2)**1/2 ,  p = a + b + c

function getRandomValue(range = 100) {
    return Math.random() * range | 0;
}

const a: number = getRandomValue(100);
console.log(a);

const b: number = getRandomValue(100);
console.log(b);

const hypotenuse: number = (a**2 + b**2)**1/2;
console.log(hypotenuse);

const perimeter: number = a + b + hypotenuse;
console.log(perimeter);
