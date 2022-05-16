// String
// const singleQuotes = 'Hello World!';
// const doubleQuotes = "Hello World!!";
const backticks = `${2+2}`;
console.log(backticks);
console.log(typeof backticks);

// Numbers

//Integer 
const wholeNumber = 5;
// Float
const decimalnumber =0.5;

console.log(wholeNumber);
console.log(decimalnumber);

const secondNumber =10;

//const result = wholeNumber / secondNumber;

// console.log(result);
// console.log(typeof result);

// Booleans - 2 possible values: true(yes, 1, correct) & false ( no, incorrect, 0)

const isCool = true;

console.log(typeof isCool);

// If statement
if(isCool) {
  console.log("Hey buddy ur pretty cool");
} else{
  console.log("Oh, hi...");
}

//  Null - 1 value which is NULL.

// let age= null;


// console.log(typeof age);

// Undefined - value not assigned

let x; 

console.log(typeof x);

// Objects -  simplest form : used to group variables

// const name = "John" ;
// const age = "25" ;

// const person = {
//   name: "John",
//   age: 25,
// }
// Dot notation
// console.log(typeof person.name);

//  Array - store ordered data collections
const arr=[1, 2, 3, 4];
console.log(arr);

const date = new Date();
console.log(typeof date);

// Statically typed langs (each variable & expression type is already known @ compile time | once a var. is declared is to be a certain type - it can't hold any other type)



// Dynamically typed langs (variables can receive different data types over time, like Javascript)

let message ="Hello, world!";
console.log(typeof message);

message = true;

console.log(typeof message);

// Comparison operators ( < > =) => true/false

const a = 5;
const b = 10;
// Greater than or equal to
// console.log(a >= b);
// Less than or equal to
console.log(a <= b);

// Is Equal (= for declaring, == for is equal)
console.log(a == b);

// Not Equal (!)
console.log(a != b);

// Strict Equality(===)
console.log(a===b);

// Strict Inequality (!==)
console.log(a!==b);

// Loose (==) vs Strict(===) Equality
// Loose compares values, not date types. - returns true if similar
console.log(5=="5");
// Strict compares values & date types - returns true only if both are the same data type
console.log(5==="5");

// Good ones: === !==
// Evil Twins: == !=

console.log("" == "0"); //false
console.log(0 == "0"); //true

console.log(false == "false"); //false
console.log(false == "0"); //true

// Always use === unless you have a good reason to use loose.

// Logical Operators 
// AND && => ALL operands are true => true
console.log(true && false); //false
// OR || @ least one operand is true => true
console.log(true || false);
// NOT ! reverses boolean value
console.log(!false); // true

// Decision Making Code - Logic and Control Flow (If/Switch statements, truthy/falsy values, ternary operator)

const age = 18;

// if (condition) {
    // block of code
// }

if (age > 18) {
  console.log("You may enter!");
} else if (age===18) {
console.log("You just turned 18, sorry!");
} else {
  console.log("Grow up!");
}

// The "while loop"

//while(condition){
  //code
//}

// let i = 0;

// while(i < 10){
//   console.log(i);
//   i++;
// }

// The "for" loop
// for([initialization]; [condition]; [final-expression]){
  // code
// }

for(let i = 0; i < 10; i++) {   
  console.log(i);
}

// Dont write DRY code (Don't repeat yourself)

// Functions - block of code designed to perform a task
// console.log() is a built in function

// // A function declaration (defining a function) does NOT execute the code
// function square(number) {
//   return number * number;
// }

// Function Declaration
// function name(params){
  //statements
  // have access to "this" keyword
//}

// A function expression
// const name = function(params) {

// }

// An arrow function (shorter syntax, used more)
// const name = (params) => {

// }

// // A function call(calling/executing a function) actually executes/invokes the defined function
// const result = square(5); <=Makes use of the return statement 

// console.log(result);

function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

sayHi("Samuel")
sayHi("Mary-Jane");

// Every function returns undefined unless otherwise specified | Return statement stops execution

function add(a, b){
  return a + b;
}

// const sum = add(2, 2); 
// console.log(sum);

function test(){
  console.log(1);
  return true;
  console.log(2);
  return false;
  console.log(3);
}

 const bool = test();

 console.log(bool);

//  Arrow Function

const square = (number) => {
return number * number
}

// if a function only has one return statement, we can simplify it to one line like so. Everything after the variable is a function, everything after the arrow is the return statement
const square1 = (number) => number * number;

const result = square(6); 
const result1 = square(7)

console.log(result1);
console.log(result);
