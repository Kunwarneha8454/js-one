const flowers = ["Sunflower", "Rose", "Tulip", "Lily"];
const fruits = ["Apple", "Mango", "Orange"];

// flowers.push(fruits);
// push() would add the entire array as ONE element (nested array)


// concat() → returns a NEW array
const all = flowers.concat(fruits);
console.log(all);


// Spread operator → modern & preferred
// Expands elements individually
const all2 = [...flowers, ...fruits];
console.log(all2);


// ----------- flat() ----------- //

const anotherarr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// flat(depth) → flattens nested arrays
// Infinity → completely flattens all levels
const anotherarr2 = anotherarr.flat(Infinity);
console.log(anotherarr2);


// ----------- Array checks & creation ----------- //

console.log(Array.isArray("Neha"));
// Checks if value is an array → false

console.log(Array.from("Neha"));
// Converts iterable/string into array → ['N','e','h','a']

console.log(Array.from({ name: "Neha" }));
// Returns empty array
// Because object is not iterable
// Need to specify keys or values explicitly


// ----------- Array.of() ----------- //

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Creates array from given values
console.log(Array.of(score1, score2, score3));
