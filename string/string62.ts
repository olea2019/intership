// A string with an English sentence is given. Encrypt the string using the right cyclic shift of any letter by one position of the English 
// alphabet (for instance, the letter 'A' is encoded by the letter 'B', 'a' is encoded by 'b', 'B' is encoded by 'C', 'z' is encoded by 'a', 
// and so on). Do not change blank characters and punctuation marks.

const string = ' aBcZ i Have  beeen, redirected 1!';

function encriptWord(word: string): string[] {

    const array: any = word.split('');

    for (let i = 0; i < array.length; i++) {
        let value = array[i].codePointAt(0)!;
        if ((value >= 65 && value < 90) || (value >= 97 && value < 122)) {
            value++;
        } else if (value === 90) {
            value = 65;
        } else if (value === 122) {
            value = 97;
        }
        array[i] = value;
    }

    const encriptWord = array.map((value: number) => String.fromCharCode(value)).join('');

    return encriptWord;
}

const encriptString = string
    .split(' ')
    .filter(x => x.length > 0)
    .map(value => encriptWord(value))
    .join(' ');

console.log(encriptString);
