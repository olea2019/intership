// A real-valued square matrix A of order M is given. Find the sum of elements of its main diagonal: A1,1, A2,2, A3,3, …, AM,M.

const matrix = [
    [2, 1, 56, 6],
    [4, 5, 11, 8],
    [3, 2, 21, 3],
    [9, 8, 77, 0]
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}

let sum: number = 0;

for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
}
console.log(sum);
