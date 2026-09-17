interface User {
  username: string;
  password: string;
}

function logen(user: User): void {
  console.log(`Logging in user: ${user.username}`);
}

const validUser: User = {
  username: "johndoe",
  password: "securePassword123"
}; // Property 'id' is missing in type '{ username: string; password: string; }' but required in type 'User'.

logen(validUser);



interface User {
  username: string;
  password: string;
  email?: string; 
}

function login(user: User): void {
  console.log(`Logging in: ${user.username} | Email: ${user.email ?? "N/A"}`);
}

login({
  username: "alice",
  password: "mypassword"
});  // Argument of type '{ username: string; password: string; }' is not assignable to parameter of type 'User'.
 // Property 'id' is missing in type '{ username: string; password: string; }' but required in type 'User'.

login({
  username: "bob",
  password: "anotherpassword",
  email: "bob@example.com"
}); // Argument of type '{ username: string; password: string; email: string; }' is not assignable to parameter of type 'User'.
  //Property 'id' is missing in type '{ username: string; password: string; email: string; }' but required in type 'User'.



interface User {
  readonly id: number;
  username: string;
  password: string;
  email?: string;
}

const user: User = {
  id: 101,
  username: "charlie",
  password: "password1"
};

user.id = 202; // Cannot assign to 'id' because it is a read-only property.
export {};