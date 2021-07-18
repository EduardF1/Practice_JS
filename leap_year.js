// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return "Leap year.";
//             }
//             return "Not leap year.";
//         }
//         return "Leap year.";
//     }
//     return "Not leap year.";
// }

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap year.";
    }
    return "Not leap year.";
}

isLeapYear(3031);
