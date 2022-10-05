// A string that contains a fully qualified path name (that is, the drive and directory parts, the file name and extension) is given. 
// Extract the first directory name (without backslashes '\') from the string. If the file with the given name is located in the root 
// directory then output a backslash. 

const string = 'C:\\Windows\\System32\\calc.exe';

const start = string.indexOf('\\');
const end = string.lastIndexOf('\\');

const directories = string.slice(start + 1, end).split('\\');
const firstDirectory = directories[0];

console.log(firstDirectory);
