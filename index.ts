let productName:string = "Book";
let price:number = 20;
let discountAvailable:boolean = true;

console.log(productName, price, discountAvailable)

function getDiscount(price:number, discount:number){
  return price - price * discount;
}
console.log(getDiscount(22, 12))


function printLength(x:unknown):void{
  console.log(x?.toString().length?? 0);
}

printLength("Hello");
printLength(123);

export{}