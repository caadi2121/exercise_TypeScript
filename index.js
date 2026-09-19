function echo(input) {
    return input;
}
const strResult = echo("Hello TypeScript");
const numResult = echo(42);
const arrayResult = echo([1, 2, 3]);
const objectResult = echo({ id: 1, name: "Alice" });
console.log(strResult, numResult, arrayResult, objectResult);
const textResult = {
    status: "success",
    data: "User created successfully"
};
const userResult = {
    status: "success",
    data: {
        id: 101,
        name: "Sarah"
    }
};
console.log(textResult, userResult);
// { status: 'success', data: 'User created successfully' } { status: 'success', data: { id: 101, name: 'Sarah' } }
//3===================================================================================
function first(items) {
    return items[0];
}
const firstNumber = first([10, 20, 30]);
const firstString = first(["apple", "banana", "cherry"]);
const firstObject = first([
    { id: 1, role: "Admin" },
    { id: 2, role: "User" }
]);
console.log(firstNumber, firstString, firstObject);
export {};
