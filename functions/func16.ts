// Write a logical function IsPalindrome(K) that returns True, if the decimal representation of a positive parameter K is a palindrome 
// (i. e., it is read equally both from left to right and from right to left), and False otherwise. Using this function, find the amount 
// of palindromes in a given sequence of 10 positive integers.

// solution provided by Alex

function getRandomValue(range = 1000000) {
    return Math.trunc(Math.random() * range);
}

const k1: number = 123321;
const k2: number = 12321;
const k3: number = 123421;
const k4: number = getRandomValue() + 1;
const k5: number = getRandomValue() + 1;
console.log(k1, isPalindrom(k1));
console.log(k2, isPalindrom(k2));
console.log(k3, isPalindrom(k3));
console.log(k4, isPalindrom(k4));
console.log(k5, isPalindrom(k5));

function isPalindrom(k: number): boolean {
    let length = 0;
    let kCopy = k;
    while (kCopy > 0) {
        kCopy = Math.trunc(kCopy / 10);
        length++;
    }
    
    for (let i = 0; i < Math.trunc(length / 2); i++) {
        const right = Math.trunc(k / (10 ** i)) % 10;
        const left = Math.trunc(k / (10 ** (length - i - 1))) % 10;

        if (right !== left) {
            return false;
        }
    }

    return true;
}
 