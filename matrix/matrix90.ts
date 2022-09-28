// A real-valued square matrix of order M is given. Assign zero value to the matrix elements that lie on the secondary diagonal or below it. 
// Do not use conditional statements.

const matrix = [
    [2, 1, 56, 6],
    [4, 5, 11, 8],
    [3, 2, 21, 3],
    [9, 8, 77, 0]
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}

const exchangedMatrix = Array.from({ length: 4 }, (_, index): number[] => Array.from(matrix[index]));

for (let i = matrix.length - 1; i >= 0; i--) {
    for(let j = matrix.length - i - 1; j < matrix.length; j++) {
        exchangedMatrix[i][j] = 0;
    }
}

console.log("--------");
for (let i = 0; i < exchangedMatrix.length; i++) {
    console.log(exchangedMatrix[i]);
}
