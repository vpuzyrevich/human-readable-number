module.exports = function toReadable(number) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    if(number === 0) {
        return 'zero';
    } else if (number < 10) {
        return ones[number];
    } else if(number >= 10 && number < 20) {
        return `${teens[number % 10]}`;
    } else if (number >= 20 && number < 100 && number % 10 === 0) {
        return `${tens[Math.floor(number/10)]}`;
    } else if (number >= 20 && number < 100) {
        return `${tens[Math.floor(number/10)]} ${ones[number % 10]}`;
    } else if(number % 100 === 0) {
        return `${ones[Math.floor(number/100)]} hundred`;
    } else if((number % 100) < 10) {
        return `${ones[Math.floor(number/100)]} hundred ${ones[number % 100]}`;
    } else if((number % 100) < 20 && (number % 100) > 10) {
        return `${ones[Math.floor(number/100)]} hundred ${teens[number % 10]}`;
    } else if(number % 10 === 0) {
        return `${ones[Math.floor(number/100)]} hundred ${tens[Math.floor(number % 100 / 10)]}`;
    } else {
        return `${ones[Math.floor(number/100)]} hundred ${tens[Math.floor(number % 100 / 10)]} ${ones[number % 10]}`;
    }
};
