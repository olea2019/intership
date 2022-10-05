// Three strings S, S1, S2 are given. Replace the first occurrence of S1 in the 
// string S by the string S2. 

const s: string = '1234567890';
const s1: string = '567';
const s2: string = 'abc';

const changedS = s.replace(s1, s2);
console.log(changedS);
