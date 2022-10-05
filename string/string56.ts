// A string with an English sentence is given. Output the shortest word in the string. If there are several words of the maximal length then output 
// the last one. A word is defined as a character sequence that does not contain blank characters, punctuation marks and is bounded by blank characters,
// punctuation marks or the string beginning/end. 

const string = 'i Have beeen redirected  1 to your site where almost 123 magically maximum';

const words = string.split(' ').filter(x => x.length > 0);
const response = words.reduce(
    (result, word) => {
        if (word.length <= result.length) {
            return word;
        }

        return result;
    },
)

console.log(response);
