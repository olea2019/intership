// A string that contains a fully qualified path name (that is, the drive and directory parts, the file name and extension) is given. Extract 
// the file name (without the path and extension) from the string. 

const string = 'C:\\Windows\\System32\\calc.exe';

const start = string.lastIndexOf('\\');
const end = string.lastIndexOf('.');
const fileName = string.slice(start + 1, end);
console.log(fileName);
