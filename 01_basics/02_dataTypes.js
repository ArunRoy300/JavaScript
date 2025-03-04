
"use strict";
/*
his is a directive that switches the engine to the "modern" mode, 
changing the behavior of some built-in features. It is not a statement, 
but a literal expression, ignored by earlier versions of JavaScript.
*/

// alert(3+#) we are using nodejs, not the browser

// console.log(3 + 4); console.log("Hello World"); code readability is important

// primitive data types
let name = "Arun"; // string
let age = 30; // number
let isApproved = true; // boolean
let firstName = undefined; // undefined
let lastName = null; // null (standalone value)
let symbol = Symbol("symbol"); // symbol

// obejects
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isApproved); // boolean
console.log(typeof firstName); // undefined
console.log(typeof lastName); // object
console.log(typeof symbol); // symbol
