// Given a nonempty string and an integer N (> 0), output a new string that 
// contains the given string characters separated by N characters "*".

const n: number = 3
console.log(n);
const string: string = '1234567';
console.log(string);

const asterisk = Array.from({length: n}, (value => "*")).join('');
const changedString = string.split('').join(asterisk);
console.log(changedString);
