
function isValidPassword(password, username) {
    if (password.length >= 8 &&
        !password.includes(" ") &&
        !password.includes(username)) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidPassword("hello123", "isha"));
console.log(isValidPassword("hello", "isha"));
console.log(isValidPassword("hello 123", "isha"));
console.log(isValidPassword("isha12345", "isha"));
