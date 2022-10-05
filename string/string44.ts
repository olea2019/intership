// A string that contains English words separated by one or more blank characters is given. All string letters are in uppercase. 
// Find the amount of words containing exactly three letters "E". 

const string = 'i have beeen redirected to your site where almost magically';

const array = string.split(' ').map(value => value.split('e').length - 1).filter(value => value === 3).length;

console.log(array);

