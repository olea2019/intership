// Write an integer function Quarter(x, y) that returns the number of a coordinate quarter containing a point with nonzero real-valued coordinates 
// (x, y). Using this function, find the numbers of coordinate quarters containing each of three points with given nonzero coordinates.

function getRandomValue (range = 100) {
    return Math.trunc(Math.random() * range);
}

function getSignedRandom(range = 100) {
    return (getRandomValue(range) + 1) * (getRandomValue(2) === 0 ? 1 : -1);
}

const x: number = getSignedRandom() + 1;
console.log("x = ", x);
const y: number = getSignedRandom() + 1;
console.log("y = ", y);

function quarter(x: number, y: number): number {
    let quadrant: number;
    if (x > 0 && y > 0) {
        quadrant = 1;
    } else if (x < 0 && y > 0) {
        quadrant = 2;
    } else if (x < 0 && y < 0) {
        quadrant = 3;
    } else {
        quadrant = 4;
    }
    return quadrant;
}

console.log(quarter(x, y));
