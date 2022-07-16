

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

function getLargetsNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        console.log(num1)
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2)
    } else {
        console.log(num3)
    }
    }

    getLargetsNumber(5,3,2);
    getLargetsNumber(3,7,4);
    getLargetsNumber(2,3,12);