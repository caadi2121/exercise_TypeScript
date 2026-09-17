function fullName(first, last) {
    return first + " " + last;
}
const name = fullName("maxamed", "c.qaadir");
console.log(name);
function registerUser(username, isAdmin, language = "en") {
    console.log(`Username: ${username}, Is Admin: ${isAdmin}, Language: ${language}`);
}
registerUser("maxamed", true);
function average(...scores) {
    if (scores.length === 0)
        return 0;
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
// Testing with 3-5 values:
console.log(average(85, 90, 95));
console.log(average(100, 80, 60, 40, 70));
export {};
