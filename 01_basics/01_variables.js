const accountId = 123456;
let accountEmail = "arunroy@gmail.com";
var accountPassword = "password123";
accountCity = "Bangalore";
let accountState;


// accountId = 2; --> const can not be re assigned
accountEmail = "akr@gmail.com"
accountPassword = "123456";
accountCity = "Mumbai";

// console.log(accountId);
/* 
Prefer not to use var 
because it is function scoped and can be re-declared
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);