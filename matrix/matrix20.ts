// An M × N matrix of real numbers is given. Find the product of elements for each matrix column. 

const matrix = [
    [2, 1, 10, 5, 7],
    [4, 5, 11, 8, 9],
    [3, 2, 22, 3, 0],
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}

const productsColumn: number[] = [];

for (let i = 0; i < matrix[0].length; i++) {
    let product: number = 1;
    for (let j = 0; j < matrix.length; j++) {
        product *= matrix[j][i]; 
    }
    productsColumn.push(product);
}

console.log("product of elements for each matrix column:");
console.log(productsColumn);
