const literal: number[] = [];

const x: Array<string | number> = [2, "2"];

const tuple: [number, string, string | number] = [1, "a", "2"];
const tuple2: [number, ...string[]] = [1, "1", "2", "a", "c", "d", "e"];

const dontDoThis = new Array<number>();

const newStandard = Array.from([1, 2, 3]);
const newStandard2 = Array.from({ length: 20 }, (_, index) => index ** 2);
const newStandard3 = Array.from([10, 20, 30], (x) => x + 5);

const testArray = [10, 3, 9, 7, 4, 2, 8];


const array = [1, 2, 3];
const notACopy = array;
notACopy[0] = 10;
console.log(notACopy); // will log => [10, 2, 3]
console.log(array); // will log => [10, 2, 3]

const copyArray = [...array];


// adaugarea unui element la sfarsitul arrayului
// metoda push intoarce lungimea noua a tabelului
tuple2.push('value', 'another value');

// stergerea ultimului element din array
// metoda pop iti intoarce elementul sters
tuple2.pop();

// --------------------------------------------------

// adaugarea unui element la inceputul arrayului
// ca si push intoarce lungimea noua
tuple2.unshift('new value', 'some value');

// steregerea primului element din array
// ca si pop intoarce elementul sters
tuple2.shift();
