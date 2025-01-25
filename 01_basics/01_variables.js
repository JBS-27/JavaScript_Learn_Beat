const accountId = 144553 // Constant can be created using const method only 
// Variable can be created in two ways
let accountEmail="singharsh@google.com"
var accountPassword="12345"
/*
Refer not to use VAR. Because of issue on block scope and functional scope
*/
// Directly you can pass any variable name and assign its value but it's a bad practise
accountCity="Jaipur"
let accountState;
// accountId=2 //Not Allowed
accountEmail="acb@asdf.com"
accountPassword="1"
accountCity="Paris"

console.log(accountId);

console.table([accountEmail,accountId,accountCity,accountPassword,accountState])
