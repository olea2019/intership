// An M × N matrix of real numbers is given. Reflect its elements about the vertical axis of symmetry of the matrix (that is, exchange matrix columns with 
// the order numbers 1 and N, 2 and N − 1, and so on). 

// [a, b] = [b, a] // not to use

const matrix = [
    [2, 1, 2],
    [4, 5, 4],
    [3, 2, 3],
];

const reversedMatrix = Array.from({length: 3}, (_, index): number[] => []);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++){
        reversedMatrix[j][i] = matrix[i][j];
    }
}

for (let i = 0; i < reversedMatrix.length; i++) {
    console.log(reversedMatrix[i]);
}
