// Elements of a circle are numbered as: 1 — radius R, 2 — diameter D = 2·R, 3 — length L = 2·π·R of the circumference, 4 — area S = π·R**2.
// The order number of one element and its value (as a real number) are given. Output values of other elements in the same order. 

function getRandomvalue (range = 20) {
    return Math.trunc(Math.random() * range);
}

const number = getRandomvalue(4) + 1;
console.log("number = ", number);
const value = getRandomvalue();
console.log("value = ", value);

let radius: number;

 switch (number) {
    case 1:
        radius = value;
        break;
    case 2:
        radius = number / 2;
        break;
    case 3:
        radius = number / 2 * Math.PI;
        break;
    case 4:
        radius = Math.sqrt(number / Math.PI);
        break;
    default:
        radius = 0;
        console.error('wrong input');
        break;
 }

 const diameter: number = 2 * radius;
 console.log("diameter =", diameter);
 
 const length: number = 2 * Math.PI * radius;
 console.log("length = ", length);

 const area: number = Math.PI * radius**2;
 console.log("area = ", area);
