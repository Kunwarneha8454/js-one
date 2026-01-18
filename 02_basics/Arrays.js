// ----------- JavaScript Arrays (Key Points) ----------- //

// JS is dynamically typed
// Arrays can store mixed data types
// Arrays are resizable (no fixed length)

// Array copy behavior:
// Shallow copy → copies reference (changes affect original)
// Deep copy → copies value (no shared reference)

const myArr = new Array(1, 2, 3, 4);
// Creates an array using Array constructor


// ----------- Array Methods ----------- //

myArr.push(5);
// Adds element at the end

myArr.push(6);
// Adds another element at the end

myArr.pop();
// Removes last element

myArr.unshift(9);
// Adds element at the beginning (costly operation)

myArr.shift();
// Removes first element

console.log(myArr.includes(9));
// Checks if value exists → returns true/false

console.log(myArr.indexOf(9));
// Returns index if found, otherwise -1

console.log(myArr);


// Converts array to string (comma-separated)
const newArr = myArr.join();

console.log(newArr);
console.log(typeof newArr);
// Output type → string


// ----------- slice vs splice ----------- //

console.log("A ", myArr);

// slice(start, end)
// Does NOT modify original array
// End index is excluded
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);


console.log("A ", myArr);

// splice(start, deleteCount)
// MODIFIES original array
// Returns removed elements
const myn2 = myArr.splice(1, 3);

console.log(myn2);
console.log("B ", myArr);
