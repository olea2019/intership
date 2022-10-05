// A string with an English sentence is given. Convert the first letter of each word to uppercase. A word is defined as a character sequence 
// that does not contain blank characters and is bounded by blank characters or the string beginning/end. If the first word character is not a 
// letter then do not change this word.

const string = 'i Have beeen redirected  1 to your site where almost 123 magically maximum';

function changedFirstLetter(word: string): string { 
    const firstChar: string = word[0].toUpperCase();           
    const restWord = word
        .slice(1);
        return `${firstChar}${restWord}`;
}

const response = string
    .split(' ')
    .map(value => value.length > 0 ? changedFirstLetter(value) : value)
    .join(' ');
console.log(response);
