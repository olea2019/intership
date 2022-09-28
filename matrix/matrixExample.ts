const literalMatrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
];

const oddMatrix = Array.from({ length: 3 }, (_, index): number[] => []);
// [
//     [],
//     [],
//     [],
// ]
const generatedMatrix = Array.from(
    { length: 3 },
    (_, i) => Array.from({ length: 3 }, (_, j) => i * 10 + j),
); // results into the next matrix
// 0, 1, 2
// 10, 11, 12
// 20, 21, 22

// since arrays in JS/TS are dynamic, a matrix isn't supposed to be in form of a square or rectangle
// example
const triangle = [
    [0],
    [1, 2],
    [3, 4, 5]
];

// also arrays / matrix are not strictly typed in JS, and in case there isn't specified a type for the matrix (TS) it can store anything

const x = [
    [1, '2', 3],
    ['4', 5, 6],
    '7', // be careful, this will also work
];

const y: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    // [7, 8, '9'] // there is an error
];

// reading an element from matrix
// first element
const firstElement = literalMatrix[0][0];

// last element
let rowIndex = literalMatrix.length - 1;
const lastElement1 = literalMatrix[rowIndex][literalMatrix[rowIndex].length - 1];

// changing an element of a matrix
y[0][0] = 2;

// displaying all elements of a matrix 
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
        console.log(matrix[rowIndex][colIndex]);
    }
    console.log('\n'); // new line
}
// or a better example in terms of readability 
for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    const row = matrix[rowIndex];

    for (let index = 0; index < row.length; index++) {
        console.log(row[index]);
    }

    console.log('\n');
}
// also for-of and for-in statements can be used here
for (const row of matrix) {
    for (const element of row) {
        console.log(element);
    }
    console.log('\n');
}

// Also a matrix can be iterated only by row or by column (the next 2 examples show how to iterate a single or and a single column)

// Matrix17. An M × N matrix of real numbers and an integer K are given (1 ≤ K ≤ M).
// Find the sum and the product of elements of the matrix row with the order
// number K.

let k = 1;
matrix = [
    [1, 2, 3, 10],
    [4, 5, 6, 20],
    [7, 8, 9, 30],
];

let product = 1;
let sum = 0;
for (let index = 0; index < matrix[k].length; index++) {
    product *= matrix[k][index];
    sum += matrix[k][index];
}

console.log(`row ${k}`);
for (let index = 0; index < matrix[k].length; index++) {
    console.log(matrix[k][index]);
}

console.log(`the sum of the elements ${sum}`);
console.log(`the product of the elements ${product}`);

// Matrix18. An M × N matrix of real numbers and an integer K are given (1 ≤ K ≤ N).
// Find the sum and the product of elements of the matrix column with the order
// number K.

k = 1;
matrix = [
    [10, 22, 33],
    [42, 53, 96],
    [74, 28, 19],
    [99, 23, 24],
];

product = 1;
sum = 0;
for (let index = 0; index < matrix.length; index++) {
    product *= matrix[index][k];
    sum += matrix[index][k];
}

console.log(`column ${k}`);
for (let index = 0; index < matrix.length; index++) {
    console.log(matrix[index][k]);
}

console.log(`the sum of the elements ${sum}`);
console.log(`the product of the elements ${product}`);

// ---------------------------------------------------------------------------------------------------------

// references 
// arrays and matrices are references to the object itself
// changing one reference will change all of them (see example below)

// example with matrices

const row = [5, 8, 10];
matrix = [
  row,
  row,
  row,
];

matrix[0][0] = 10; // or row[0] = 10 // is same

console.log(matrix);
// will log
// 10, 8, 10
// 10, 8, 10
// 10, 8, 10

// another example with references

matrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];
console.log(matrix);
// will log
// 0, 1, 2
// 3, 4, 5
// 6, 7, 8

matrix[0] = matrix[1];
console.log(matrix);
// will log
// 3, 4, 5
// 3, 4, 5
// 6, 7, 8

matrix[0][0] = -1;
console.log(matrix);
// will log
// -1, 4, 5
// -1, 4, 5
// 6, 7, 8
