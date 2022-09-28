// An M × N matrix of integers is given. Find the order number of the last row that contains the maximal amount of elements with equal values. 

const matrix = [
    [2, 1, 2, 6, 2],
    [4, 5, 4, 8, 9],
    [3, 2, 3, 3, 0],
    [2, 2, 2, 2, 2],
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}

let repetitionsPerMatrix = 0;
let index = 0
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        let repetitionsPerRow = 1;
        for (let k = 1; k < matrix[i].length; k++) {
            if (matrix[i][j] === matrix[i][k]) {
                repetitionsPerRow++;
            } 
        }
        if (repetitionsPerRow > repetitionsPerMatrix) {
            repetitionsPerMatrix = repetitionsPerRow;
            index = i;
        }
    }
}

console.log(`number of repetations = ${repetitionsPerMatrix} index row = ${index}`);
