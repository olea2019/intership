// An integer in the range 1 to 999 is given. Output its description string as: ―two digit even number, ―three-digit odd number, etc.

function getRandomValue (range = 998) {
    return Math.trunc(Math.random() * range);
}

let a: number = getRandomValue() + 1;
console.log("a =", a);

if (a > 99) {
    console.log("three-digit");
} else if (a > 9) {
    console.log("two digit");
} else {
    console.log("one digit");
}

if (a % 2 === 0) {
    console.log("even number");
} else {
    console.log("odd number");
}
