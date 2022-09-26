// A set A of N points in the coordinate plane is given (points are determined by their coordinates x, y). Find the point of A that lies in
// the first or the third coordinate quarter and is the nearest to the origin. If the set A does not contain such points then output the 
// origin (0, 0). 

const arrayX = Array.from([2, 5, 8, -9, -3, 5, 1, 8, -1]);
console.log(arrayX);
const arrayY = Array.from([5, -4, 1, -22, 30, 5, 1, 8, 7]);
console.log(arrayY);

let min = Array.from([Number.MAX_SAFE_INTEGER, 0]);
for (let i = 0; i < arrayX.length; i++) {
    let length = Math.sqrt(arrayX[i] ** 2 + arrayY[i] ** 2);
    if (min[0] > length) {
        min[0] = length;
        min[1] = i;
    }
}

const nearestPoint = Array.from([arrayX[min[1]], arrayY[min[1]]]);
console.log("the nearest to the origin =", nearestPoint);
