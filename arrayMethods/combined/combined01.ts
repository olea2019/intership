// 1. sort an array in the reverse order (reverse method is forbidden)

// I already used map and reduce )

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reverseArray: number[] = [];

for(const value of array) {
    reverseArray.unshift(value);
}
console.log(reverseArray);
