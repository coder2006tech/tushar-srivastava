const accountId = 123456
let accountEmail = "tushar@gmail.com"
var accountPassword = "22443"
acountCity = "lucknow"
let accountState;

// accountId = 2 not allowed 
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);

accountEmail = "hc@hcgmail.com"
accountPassword  = "33434"
acountCity = "jaipur"

console.table([accountId,accountEmail,accountPassword,acountCity,accountState]);