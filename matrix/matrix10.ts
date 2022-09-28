// An M × N matrix of real numbers is given. Output elements of its columns with odd order numbers (1, 3, …). An output of matrix elements must 
// be performed in the order of columns. Do not use conditional statements.

const matrix = [
    [22, 22, 33, 5, 7],
    [42, 53, 96, 8, 9],
    [74, 28, 19, 3, 0],
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}

const oddMatrix = Array.from({ length: 3 }, (_, index): number[] => []);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.trunc(matrix[i].length / 2); j++) {
        let value = matrix[i][j * 2 + 1];
        oddMatrix[i].push(value);
    }

}

for (let i = 0; i < oddMatrix.length; i++) {
    console.log(oddMatrix[i]);
}
