// Given a positive integer, output all digit characters in the decimal 
// representation of the integer (from left to right).

const number: number = 123456789;
console.log(number);

const string = number.toString(10).split('');
console.log(string);
