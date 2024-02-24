const accountId = 12477598
let accountEmail = "187464@gmail.com"
var accountPassword = "12345"
accountCity = "Faisalabad"
let accountState;
//accountId = 18373 not allowed
accountEmail = "jfnfgu@gmail.com"
accountPassword = "85uthgbb"
accountCity = "lahore"

console.log(accountId);
//prefer not to use var becsuse of issue in block scope and functional scope
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);