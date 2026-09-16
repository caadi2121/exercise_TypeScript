let product: string = 123;
console.log(product);

let names: string[] = [
  "maxamed",
  "Faarax",
  "Cismaan"
];
console.log(names);

let numbers: number[] = [
  1, 2, 3, 4, 5, 6
];
console.log(numbers);

let status: boolean[] = [
  true, false, true, false
];

let products:string[] = [
  "phone", "laptop", 99
]
console.log(products);

type LocationTuple = [
  { city: string },
  { latitude: number },
  { longitude: number }
];

let location: LocationTuple = [
  { city: "Mogadishu" },
  { latitude: 2.0469 },
  { longitude: 45.3182 }
];
console.log(location)

export {};