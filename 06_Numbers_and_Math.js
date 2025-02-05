const score = 2323
console.log(score);

const balance = new Number(100)
console.log(balance);

// Convert it's datatype to string
//console.log(balance.toString().length);

// Generally to fixed is used to see the given number upto the fixed no. of decimal given in the brackets
//console.log(balance.toFixed(2));


const otherNumber = 123.8966


// Upto what decimal point we need the precise value

//console.log(otherNumber.toPrecision(4));

//console.log(otherNumber.toPrecision(3));


// To represent this number in good format we have to use toLocaleString()

const hundreds = 10000000
//console.log(hundreds.toLocaleString('en-IN')); // By default it will take US


// Just go in console of google chrome and type
// Number
// Then when you write number. it will automatically show you different options 
// Generally we need max and min value



// *********************************** MAHTS **********************************


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.6));

console.log(Math.ceil(4.1));
console.log(Math.floor(5.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4 ,3, 6, 8));

console.log(Math.random()); // Since random will return values between 0 and 1 

console.log(Math.random()*10+1); // Since to get number greater than 0 we need to multiply with 10 
// Since we genrally use floor in this case so to shift one zero ahead we do +1

console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()* (max - min +1)) + min)


