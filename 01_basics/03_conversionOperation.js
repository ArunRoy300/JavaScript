let score = 'Arun';

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

//Notes: 
// "33" => 33
// "33aa" => NaN
// true => 1, false => 0

let isLoggedIn = null;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// Notes:
// null => false
// undefined => false
// 0 => false
// "" => false
// NaN => false
// "0" => true
// "false" => true
// " " => true
// {} => true
// [] => true
// function(){} => true
// true => true
// false => false
// 1 => true
// -1 => true
// Infinity => true

let someNumber = undefined;

let stringSomeNumber = String(someNumber);
// console.log(stringSomeNumber);
// console.log(typeof stringSomeNumber);

// Notes:
// 33 => "33"
// 33.33 => "33.33"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined"
// {} => "[object Object]"
// [] => ""
// function(){} => "function(){}"

let value = 3;
let negValue = -value;
// console.log(negValue);

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
// console.log(str3);
