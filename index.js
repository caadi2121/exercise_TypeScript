let productName = "Book";
let price = 20;
let discountAvailable = true;
console.log(productName, price, discountAvailable);
function getDiscount(price, discount) {
    return price - price * discount;
}
console.log(getDiscount(22, 12));
function printLength(x) {
    console.log(x?.toString().length ?? 0);
}
printLength("Hello");
printLength(123);
export {};
