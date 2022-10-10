// A string that contains Latin letters and brackets of three types (parentheses '()', square brackets '[]', braces '{}') is given. If brackets are in 
// correct order (that is, each closing bracket corresponds to an opening one of the same type) then output 0. If the string contains illegal closing 
// brackets then output the order number of the first string character that is an illegal closing bracket. If the amount of closing brackets is less than 
// the amount of opening ones then output −1. 

const string = '[{(2 + 2)} + 3]';

function test(string: string): boolean {
    const chars = string.split('');
    let stack = [];
    let open = ['{', '(', '['];
    let close = ['}', ')', ']'];
    let closeIndex = 0;
    let openIndex: any = 0;

    for (let i = 0, len = chars.length; i < len; i++) {
        openIndex = open.indexOf(chars[i]);
        if (openIndex !== -1) {
            stack.push(openIndex);
            continue;
        }

        closeIndex = close.indexOf(chars[i]);
        if (closeIndex !== -1) {
            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
}


console.log(test(string));
