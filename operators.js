//Arithmetic Operators


let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

//Assignment Operators 

let a = 10;

a += 5;
console.log(a);

a -= 3;
console.log(a);

a *= 2;
console.log(a);

//Logical Operators
let age = 17;
let hasTicket = true;
let isBanned = false;

if ((age >= 18 || hasTicket) && !isBanned) {
  console.log("Entry allowed");
} else {
  console.log("Entry denied");
}
