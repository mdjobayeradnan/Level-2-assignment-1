"use strict";
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}
// Test cases
console.log(formatString("Hello")); // "HELLO"
console.log(formatString("Hello", true)); // "HELLO"
console.log(formatString("Hello", false)); // "hello"
