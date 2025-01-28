console.log("Message from a0 JS file");

// - [x] Creation of variables 

// Option 1.
console.log(a);
var a = 2; // created variable will be inside of Global scope
console.log(a);
console.log(typeof a);
a = "hi";
console.log(typeof a);

// Option 2.
let b = 4;
b = 5;
console.log(typeof b);

// Option 3.
const pi = 3.14;
// pi = 3;