// Given two integers D (day) and M (month) representing a correct date of a non-leap year, output values D and M for the previous date.

function getRandomValue(range = 100) {
    return Math.trunc(Math.random() * range);
}


let day: number = 1;
console.log("day :", day);

let month: number = getRandomValue(11) + 1;
console.log("month :", month);

if (day !== 1) {
    console.log(day - 1, month);
} else {

    switch (month) {
        case 2:
        case 4:
        case 6:
        case 9:
        case 8:
        case 10:
        case 11:
            console.log(31, month - 1);
            break;
        case 1:
            console.log("31", "12");
            break;
        case 3:
            console.log("28", month - 1);
            break;
        case 5:
        case 7:
        case 10:
        case 12:
            console.log("30", month - 1);
            break;
    }
}
