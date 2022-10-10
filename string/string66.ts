// A string with an English sentence is given. Encrypt the string by moving all characters that are at the string positions with even 
// numbers (2, 4, …) to the beginning of the string (in the same order) and moving all characters that are at the string positions with 
// odd numbers (1, 3, …) to the end of the string (in inverse order). For instance, the string 'Program' must be encrypted to 'rgamroP'. 

const string = 'Program i have been';

function encrypt(string: string): string {
    const evenIndexes = string.split('').filter((_, index) => index % 2 === 0).reverse();
    const oddIndexes = string.split('').filter((_, index) => index % 2 === 1);
    const encryptString = [...oddIndexes, ...evenIndexes].join('');
    return encryptString
}

const response = string
    .split(' ')
    .map(value => value.length > 0 ? encrypt(value) : value)
    .join(' ');
console.log(response);
