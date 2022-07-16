

let isNumberPostive = (x) => {
    if (x > 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isNumberPostive(-2);

function convertDaysToAge(numOfDays) {
    let age = numOfDays / 365;
    console.log(age);
}
convertDaysToAge(7300);