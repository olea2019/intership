// An M × N matrix of real numbers is given. For each matrix column find the amount of elements that are greater than the average of all 
// elements of this column.

function averageOfColumn(matrix: number[][], n: number): number {
    let average: number = 0;
    for (let i = 0; i < matrix.length; i++) {
            const value = matrix[i][n];
            average += value; 
        
    }
    average = average / matrix.length;
    return average;
}

const matrix = [
    [2, 1, 0, 6, 7],
    [4, 5, 11, 8, 9],
    [3, 2, 21, 3, 0],
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}

const greaterThanAverage: number[] = [];

for (let i = 0; i < matrix[0].length; i++) {
    let greaterValues: number = 0;
    const average = averageOfColumn(matrix, i);
    for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][i] > average){
            greaterValues++;
        }
    }
    greaterThanAverage.push(greaterValues);
}

console.log("amount of elements that are greater than average of elements column");
console.log(greaterThanAverage);
