// An M × N matrix of real numbers is given. For each matrix column exchange values of its minimal and maximal element.

function minOfColumn(matrix: number[][], n: number): number {
    let min: number = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < matrix.length; i++) {
            const value = matrix[i][n];
            if (value < min) {
                min = value;
            }
    }
    return min;
}

function maxOfColumn(matrix: number[][], n: number): number {
    let max: number = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < matrix.length; i++) {
            const value = matrix[i][n];
            if (value > max) {
                max = value;
            }
    }
    return max;
}

const matrix = [
    [2, 1, 56, 6, 7],
    [4, 5, 11, 8, 9],
    [3, 2, 21, 3, 0],
    [9, 8, 77, 0, 6]
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}

const exchangedMatrix = Array.from({ length: 4 }, (_, index): number[] => Array.from(matrix[index]));

for (let i = 0; i < matrix[0].length; i++) {

    let min: number = minOfColumn(matrix, i);
    let max: number = maxOfColumn(matrix, i);

    for (let j = 0; j < matrix.length; j++) {
        if (exchangedMatrix[j][i] === min){
            exchangedMatrix[j][i] = max;
        } else if (exchangedMatrix[j][i] === max) {
            exchangedMatrix[j][i] = min;
        }
    }
}

console.log("matrix column exchange values of min and max");

for (let i = 0; i < exchangedMatrix.length; i++) {
    console.log(exchangedMatrix[i]);
}
