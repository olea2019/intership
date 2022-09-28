// 2. display (console.log) all numbers greater than the right neighbor 
// example: [10, 35, 2, 17, 4, 9, 19] => should be displayed 35, 17, 19

const array: number[] = [10, 35, 2, 17, 4, 9, 19];

array.forEach((value, index, list) => {
    if (value > list[index + 1]) {
        console.log(value);
    } else if (value === list[list.length - 1]){
        console.log(value);
    }
})
