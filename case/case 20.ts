// Given two integers D (day) and M (month) that represent a correct date, output the zodiacal name corresponding to this date: 
//―Aquarius 20.1–18.2, ―Pisces 19.2–20.3, ―Aries 21.3–19.4, ―Taurus 20.4–20.5, ―Gemini 21.5–21.6, ―Cancer 22.6–22.7, ―Leo 23.7–22.8, ―Virgo 23.8–22.9, 
//―Libra 23.9–22.10, ―Scorpio 23.10–22.11, ―Sagittarius 23.11–21.12, ―Capricorn 22.12–19.1

let day: number = 1;
console.log("day :", day);

let month: number = 5;
console.log("month =", month);

switch (month) {
    case 1:
        if (day <= 19) {
            console.log("Capricorn");
        } else {
            console.log("Aquarius");
        }
        break;
    case 2:
        if (day <= 18) {
            console.log("Aquarius");
        } else {
            console.log("Pisces");
        }
        break;
    case 3:
        if (day <= 20) {
            console.log("Pisces");
        } else {
            console.log("Aries");
        }
        break;
    case 4:
        if (day <= 19) {
            console.log("Aries");
        } else {
            console.log("Taurus");
        }
        break;
    case 5:
        if (day <= 20) {
            console.log("Taurus");
        } else {
            console.log("Gemini");
        }
        break;
    case 6:
        if (day <= 21) {
            console.log("Gemini");
        } else {
            console.log("Cancer");
        }
        break;
    case 7:
        if (day <= 22) {
            console.log("Cancer");
        } else {
            console.log("Leo");
        }
        break;
    case 8:
        if (day <= 22) {
            console.log("Leo");
        } else {
            console.log("Virgo");
        }
        break;
    case 9:
        if (day <= 22) {
            console.log("Virgo");
        } else {
            console.log("Libra");
        }
        break;
    case 10:
        if (day <= 22) {
            console.log("Libra");
        } else {
            console.log("Scorpio");
        }
        break;
    case 11:
        if (day <= 22) {
            console.log("Scorpio");
        } else {
            console.log("Sagittarius");
        }
        break;
    case 12:
        if (day <= 21) {
            console.log("Sagittarius");
        } else {
            console.log("Capricorn");
        }
        break;
}
