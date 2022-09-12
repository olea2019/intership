// A number of month is given (as an integer in the range 1 to 12): 1 —January, 2 — February, etc. Output the amount of days in the month for a nonleap year.

function getRandomValue (range = 11) {
    return Math.trunc(Math.random() * range);
}

let month: number = getRandomValue() + 1;
console.log("month =", month);

switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days");
        break;
    case 2:
        console.log("28 days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days");
}
