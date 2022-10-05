// Two strings S, S0 are given. Remove the first occurrence of S0 from the 
// string S. If the string S does not contain required substrings then do not change 
// it.

const s = '1a2b3a4c6h7a'
const s0 = 'a';
let count: number = 0;
for(const value of s) {
    if (value === s0) {
        count++;
    }
}
console.log(count);

// or
console.log(s.split(s0).length - 1);
