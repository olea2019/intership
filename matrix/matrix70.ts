// An M × N matrix of real numbers is given. Double the occurrence of the matrix row that contains the maximal matrix element. 

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

let max: number = Number.MIN_SAFE_INTEGER;
let rowOfTheMax: number = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > max) {
            max = matrix[i][j];
            rowOfTheMax = i;
        } 
    }
}

for (let i = 0; i < matrix[0].length; i++){
    exchangedMatrix[rowOfTheMax].push(matrix[rowOfTheMax][i]);
}


console.log("Double row that contains the maximal matrix element")
for (let i = 0; i < exchangedMatrix.length; i++) {
    console.log(exchangedMatrix[i]);
}

