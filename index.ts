function echo<T>(input: T): T {
  return input;
}

const strResult = echo("Hello TypeScript");

const numResult = echo(42);

const arrayResult = echo([1, 2, 3]);

const objectResult = echo({ id: 1, name: "Alice" });
console.log(strResult, numResult, arrayResult, objectResult)
// Hello TypeScript 42 [ 1, 2, 3 ] { id: 1, name: 'Alice' }
//2===================================================================
interface ApiResult<T> {
  status: string;
  data: T;
}

const textResult: ApiResult<string> = {
  status: "success",
  data: "User created successfully"
};

const userResult: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: {
    id: 200,
    name: "Sarah"
  }
};
console.log(textResult, userResult)
// { status: 'success', data: 'User created successfully' } { status: 'success', data: { id: 101, name: 'Sarah' } }

//3===================================================================================


function first<T>(items: T[]): T {
  return items[0];
}

const firstNumber = first([10, 20, 30]);

const firstString = first(["apple", "banana", "cherry"]);

const firstObject = first([
  { id: 1, role: "Admin" },
  { id: 2, role: "User" }
]);

console.log(firstNumber, firstString, firstObject)
// 10 apple { id: 1, role: 'Admin' }
export {};