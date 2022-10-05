// Given a character C and a string S, double each occurrence of the 
// character C in the string S.

const c = '*'
const string = '12&34*56*6';

const array = string.split('').reduce((acc, value) => value === c ? acc + value + value : acc + value, '');
console.log(array);
