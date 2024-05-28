function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

const year = 2025;
console.log(year + (isLeapYear(year) ? " is a leap year." : " is not a leap year."));
