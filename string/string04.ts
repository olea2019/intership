// Given an integer N (1 ≤ N ≤ 26), output N first capital (that is, uppercase) 
// letters of the English alphabet (―A‖, ―B‖, ―C‖, and so on).

const n = Math.random() * 26 | 0 + 1;
console.log(n);

const nCapitalLetters = Array.from({length: n}, ((value, index) => String.fromCodePoint(65 + index)));
console.log(nCapitalLetters);
