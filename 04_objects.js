//const tinderUser = new Object() // Singleton object

const tinderUser = {} // Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Harsh Vardhan",
            lastname: "Singh"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname)
// ? is used for protection because sometimes when responses came from API's then 
// It may happen that it is empty or not so we have to check that 

//console.log(regularUser.fullname?.userfullname.lastname)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

//const obj3 = {obj1,obj2}

//const obj3 = Object.assign(obj1,obj2)

// {} is good representation of target object and all other obj1,obj2 are source objects
//const obj3 = Oject.assign({},obj1,obj2)

const obj3 ={...obj1,...obj2}

// console.log(obj3);

// Now we are representing how the values come from database 
// that is array of users

const users = [
    {
        id:1,
        email: "mahadev@gmail.com"
    },
    {
        id:1,
        email: "mahadev@gmail.com"
    },
    {

    },
]

users[1].email

console.log(tinderUser);

// This type of accessing return the values in the form of arrays 

console.log(Object.keys(tinderUser)); // Array
console.log(Object.values(tinderUser)); //Array
console.log(Object.entries(tinderUser));

// Used to check whether tinderUser contains this property or not 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedOut'));



// **********************************************
// 16/03/25

// Destructure


const course={
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Mahadev"
}


// course.courseInstructor

// 2nd way to fetch the values of class course

//const {courseInstructor} = course

// or we can de-structure teh courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// Generally destructuring is used in node js

// const navbar = ({company}) => {
//  }

//navbar(company = "hitesh")


// API's 

// Actually API represent how the values came from database
// Intially the values come in the form of xml  which is too complex
// but now it is coming in the json format -> { } 

// {
//     "name":"Mahadev",
//     "coursename":"js in hindi",
//     "price":"free"
// }

// Sometimes the values came in the form of arrays 
[
    {},
    {},
    {}
]