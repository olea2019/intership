// A string with at least one blank character is given. Output the substring of S that contains all characters between the first and the last 
// blank character. If the string S contains only one blank character then output an empty string.

const string: string = '12 34 5 67 890'

const firtIndex = string.indexOf(' ') + 1;
const lastIndex = string.lastIndexOf(' ');

const substr: string = string.slice(firtIndex, lastIndex);
console.log(substr);
