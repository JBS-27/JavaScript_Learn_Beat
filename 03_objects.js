// Singleton made form constructor not  by literals

// object literals

// It is used to define the symbol
const mySym = Symbol("key1")
// To declare the mySym as symbol then u have to use the square brackets

const JsUser = {
    name: "Mahadev",
    "full name": "Bhole Shankar",
    [mySym]: "key1",
    age: 18,
    location: "Jaipur",
    email: "mahadev@facebook.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)

// But there is one more method to access the attributes
//console.log(JsUser[email]) // But is is giving error as the email is understood as a string 

// correct syntax is 
// console.log(JsUser["email"])

// console.log(JsUser["full name"])

// console.log(JsUser[mySym])

JsUser.email = "mahadev@yahoo.com"
// for freezing the change of the values in the object
//Object.freeze(JsUser)

// Now any changes won't affect the object

JsUser.email ="mahadev@facebook.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());