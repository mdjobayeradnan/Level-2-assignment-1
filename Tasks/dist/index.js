"use strict";
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
function filterByRating(items) {
    return (items.filter(item => item.rating >= 4));
}
class vichcle {
    make;
    year;
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `make:${this.make}, year:${this.year}`;
    }
}
class Car extends vichcle {
    model;
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `model:${this.model}`;
    }
}
function processValue(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value * 2;
    }
}
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return 'weekend';
    }
    else {
        return 'weekday';
    }
}
async function squareAsync(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error('the number is negative'));
            }
            else {
                resolve(n * n);
            }
        }, 1000);
    });
}
