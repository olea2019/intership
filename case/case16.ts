//Given an age in years (as an integer in the range 20 to 69), output its alphabetic equivalent as: ―twenty years, ―thirty-two years, ―forty-one year,etc. 

function getRandomValue(range = 100) {
    return Math.trunc(Math.random() * range);
}

const number: number = getRandomValue(49) + 20;
console.log("number = ", number);

let years: string;

switch (Math.trunc(number / 10)) {
    case 2:
        years = "twenty ";
        break;
    case 3:
        years = "thirty ";
        break;
    case 4:
        years = "forty ";
        break;
    case 5:
        years = "fifty ";
        break;
    case 6:
        years = "sixty ";
        break;
    default:
        years = "error";
        console.error('wrong input');
        break;
}

switch (Math.trunc(number % 10)) {
    case 1:
        console.log(years + "one year");
        break;
    case 2:
        console.log(years + "two years");
        break;
    case 3:
        console.log(years + "three years");
        break;
    case 4:
        console.log(years + "four years");
        break;
    case 5:
        console.log(years + "five years");
        break;
    case 6:
        console.log(years + "six years");
        break;
    case 7:
        console.log(years + "seven years");
        break;
    case 8:
        console.log(years + "eight years");
        break;
    case 9:
        console.log(years + "nine years");
        break;
    case 0:
        console.log(years + "years");
        break;
}
