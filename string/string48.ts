// A string that contains English words separated by one or more blank characters is given. All string letters are in uppercase. Process each word as 
// follows: replace all next occurrences of its first letter by the character '.' (for example, the word 'MINIMUM' must be transformed into 'MINI.U.'). 
// Do not change blank characters in the string. 

const string = 'I HAVE BEEN REDIRECTED    CHARACTER YOUR SITE EXAMPLE  WERE  MINIMUM'

function replaceLettersWithDots(word: string): string {
    const firstChar = word[0];                // M
    const restWord = word
        .slice(1)                             // 'INIMUM'       
        .split(firstChar)                     // ['INI', 'U', '']
        .join('.');                           // 'INI.U.'
    return `${firstChar}${restWord}`;
}

const response = string
    .split(' ')
    .map(value => value.length > 0 ? replaceLettersWithDots(value) : value)
    .join(' ');
console.log(response);
