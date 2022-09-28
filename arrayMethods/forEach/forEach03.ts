// # the next problem should use for each (but can use another methods also)
// 3. display (console.log) each number in the list and how many times does it appear further in the list 
// example: [10, 2, 3, 2, 1, 2, 1]
// displays:
// 10 0
// 2 2
// 3 0
// 2 1
// 1 1
// 2 0
// 1 0


const array: number[] = [10, 2, 3, 2, 1, 2, 1];

array.forEach((value, index, list) => {
    let acc = 0;
    for (let i = index + 1; i < list.length; i++) {
        if (value === list[i]) {
            acc++;
        }
    }
    console.log(value, acc);
})
