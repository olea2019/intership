// A set A of N points with integer-valued coordinates x, y is given. The order in the plane is defined as follows: (x1, y1) < (x2, y2), if 
// either x1 + y1 < x2 + y2 or x1 + y1 = x2 + y2 and x1 < x2.Using this order definition, rearrange points of A in descending order. 

const arrayX = Array.from([2, 1, 4, 6, 5]);
console.log(arrayX);
const arrayY = Array.from([5, 2, 4, 7, 4]);
console.log(arrayY);

const orderedX = [...arrayX];
const orderedY = [...arrayY];

for (let i = 0; i < arrayX.length - 1; i++) {
    for (let j = 0; j < arrayX.length - i; j++) {
        if ((orderedX[j] + orderedY[j] > orderedX[j + 1] + orderedY[j + 1]) && orderedX[j] > orderedX[j + 1]) {
            const value = Array.from([orderedX[j], orderedY[j]]);
            orderedX[j] = orderedX[j + 1];
            orderedY[j] = orderedY[j + 1];
            orderedX[j + 1] = value[0];
            orderedY[j + 1] = value[1];
        }
    }
}

console.log(orderedX);
console.log(orderedY);