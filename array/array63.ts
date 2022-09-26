// Two arrays A and B of 5 real numbers are given. Values of elements of each array are in ascending order. Write all elements of A and B to a 
// new array C (of size 10) so that values of all elements of C were in ascending order. 

function minInArray(list: number[]) {
    let min = Number.MAX_SAFE_INTEGER;
    let index = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
            index = i;
        }
    }
    return { min, index};
}

const a = Array.from([1, 2, 5, 7, 10]);
console.log(a);
const b = Array.from([0, 2, 4, 8, 9]);
console.log(b);

const concatAB = [...a, ...b];
const c: number[] = [];

for (let i = 0; i < concatAB.length; i++) {
    let object = minInArray(concatAB);
    let min = object.min;
    let index = object.index;
    c.push(min);
    concatAB[index] = Number.MAX_SAFE_INTEGER;
}
console.log(c);
