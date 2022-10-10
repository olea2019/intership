// A string that contains digits and Latin small letters is given. If letters of the string are in alphabetic order then output 0, otherwise 
// output the order number of the first string character that is a letter and breaks the required order. 

const string = 'abcd12z3a';

const letters: number[] = string
    .split('')
    .map((value: string) => value.codePointAt(0)!)
    .filter((value: number) => value >= 97 && value <= 122);


const index = letters.every((value, index) => index != letters.length - 1 ? value < letters[index + 1] : true);

console.log(index ? "letters ARE in asphabetic order" : "letters ARENT in asphabetic order");
