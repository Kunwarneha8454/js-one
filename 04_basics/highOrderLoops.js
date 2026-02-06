// ================== for...of loop ==================

// for...of is used to iterate over iterable values like Arrays, Strings, Maps, Sets

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i)          // Prints each number from the array
}



// ================== for...of with String ==================

const greetings = "hello everyone"

for (const i of greetings) {
    if (i == " ") {
        continue           // Skips spaces
    }
    console.log(`Each char is ${i}`)   // Prints every character except space
}



// ================== Maps ==================

// Map is a built-in object that stores key-value pairs
// It also remembers insertion order

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map)


// for...of works on Map because Map is iterable
// It returns [key, value] pairs

for (const [key, value] of map) {
    console.log(key, ':-', value)
}



// ================== for...in with Map ==================

// for...in DOES NOT work on Map
// because for...in is meant for object properties, not iterable structures

for (const i in map) {
    console.log(i)   // Nothing prints
}



// ================== Objects ==================

const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
}


// for...of DOES NOT work directly on objects
// because plain objects are NOT iterable

// This will throw an error:
// for (const i of myObj) { }


// Correct way: use for...in for objects

for (const key in myObj) {
    console.log(key, ":", myObj[key])
}
