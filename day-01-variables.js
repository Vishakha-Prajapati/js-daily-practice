  //    JS LEARNING DAY 1



     



















// Day 1 – JavaScript Basics 🚀

// What is JavaScript?
// Values • Variables • Operators

















// “JavaScript is a programming language used to make websites interactive.
// For example, button clicks, form handling, and dynamic content updates.
// It is also used in the backend using environments like Node.js.”



















// 🧠 VALUES
// “A value is data — something that actually exists.
// For example: numbers, strings, and boolean values.
// Like ‘Vishakha’, 25, or true — these are all values.”

 
//name = "Vishakha"; // string value
//age = 25; // number value










// 📦 VARIABLES
// “A variable is a name or label that refers to a value.
// For example: let age = 25
// Here, ‘age’ is the variable and 25 is the value.”


// book = classmate; // variable name is book, value is classmate






// 🎯 1. What is let?

// 👉 let is used to declare a variable that can change

// Example:
// let age = 25;
// age = 26; // ✅ allowed

// 👉 You can reassign value

// 🧠 Scope of let

// 👉 let is block scoped

// if (true) {
//   let x = 10;
// }
// console.log(x); // ❌ error

// 👉 Only accessible inside { }

// 🎯 2. What is const?

// 👉 const is used for constant values (cannot be reassigned)

// Example:
// const age = 25;
// age = 26; // ❌ error
// 🧠 Important Confusion (VERY IMPORTANT)

// 👉 const means:
// ❌ value cannot change
// ✅ variable reference cannot change

  const girl  ='priya';
  girl = 'sneha'; 







// ⚙️ OPERATORS
// “Operators are used to perform operations on values.
// For example: addition, subtraction, or comparison.
// Like 5 + 3.”

 // Arithmetic operations are +-*/%

// 5 + 3 = 8
// 5 - 3 = 2
// 5 * 3 = 15
// 5 / 3 = 1.6666666666666667
// 5 % 3 = 2

  

 //Comparison operators are ==, ===, !=, !==, >, <, >=, <=


//logical operators are &&, ||, !

 //arthmetic operators: +, -, *, /, %
 





// Variables:  let, const

let name = "Vishakha";
const age = 25;

name = "Dev"; // reassignment works

// const age = 30 ❌ not allowed
// let x = 5;
// let y = x;

// y = 10;

// console.log(x);
// console.log(y);
// console.log(x);
