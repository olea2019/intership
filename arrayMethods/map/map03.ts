// 3. Create an array where each element at the place i is the element from the original array in sum with the element from the end (first + last, second + penultimate, and so on)
// example:
// original array = // 3. Create an array where each element at the place i is the element from the original array in sum with the element from the end (first + last, second + penultimate, and so on)
// example:
// original array = [10, 35, 2, 17, 4, 9, 19]
// result = [10 + 19, 35 + 9, 2 + 4, 17 + 17, 4 + 2, 9 + 35, 19 + 10] = [29, 44, 6, 34, 6, 44, 29]

const array: number[] = [10, 35, 2, 17, 4, 9, 19];

const changedArray: number[] = array.map((value, index, list) => value + list[list.length - index - 1]);

console.log(changedArray);
