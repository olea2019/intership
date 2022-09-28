// A real-valued square matrix A of order M is given. Rotate its elements clockwise by 90° (that is, assign an initial value of A1,1 to A1,M, an initial 
// value of A1,M to AM,M, and so on). Do not use an additional matrix.

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const changedMatrix = Array.from({length: 3}, (_, index): number[] => []);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++){
        changedMatrix[j][matrix.length - i - 1] = matrix[i][j];
    }
}

for (let i = 0; i < changedMatrix.length; i++) {
    console.log(changedMatrix[i]);
    
}
