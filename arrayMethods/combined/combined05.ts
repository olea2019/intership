// 5. find all elements of an array where the element is in the sorted order
// example: [1, 10, 3, 2] (sorted will look like: [1, 2, 3, 10]) => [1, 3] (because 1 and 3 didn't changed the index in the sorted array)

const array: number[] = [1, 10, 3, 2];
const arrayCopy = [...array];

const sortedArray: number[] = arrayCopy.sort((a, b) => a - b);
console.log(sortedArray);

const elementInTheirPlaces: number[] = array.filter((value, index) => value === sortedArray[index]);
console.log(elementInTheirPlaces);
