const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["Supman","flash","batman"]

//marvel_heros.push(dc_heros)
 
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

// Concat return a new list after concatnating 

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);


// It will spread the values individually 
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7 , [6, 7, [4, 5]]]
// It is used to just flat the given list by specifying the depth  of the list
// Generally we need to specify the depth but you simply do that by writing Infinity
const real_another_array = another_array.flat(Infinity)  
console.log(real_another_array)

// Check whether the given passed element is array or not
console.log(Array.isArray("Mahadev"))
console.log(Array.isArray([1,3,"fdadf"]))
// Just convert the string into the list of characters
console.log(Array.from("Mahadev"))


// Intresting case because it cannont understand from whom to make the array i.e., key or value 
console.log(Array.from({name: "Mahadev"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));