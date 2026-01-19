// --------------------
// SINGLETON OBJECT
// --------------------
// Object.create() is used to create singleton objects
// (only one instance exists)



// --------------------
// OBJECT LITERALS
// --------------------

// Creating a Symbol (always unique, even if description is same)
const mySym = Symbol("key1")

// Creating an object using object literal syntax
const user = {
    name: "Pri",                      // normal key-value pair

    "full name": "Neha Kunwar",        // key with space → must be accessed using brackets

    [mySym]: "myKey1",                 // Symbol used as a key
                                       // Square brackets are REQUIRED
                                       // Without them, it would be treated as a string key

    age: 18,
    location: "Dehradun",
    email: "neha123@gmail.com",
    isLoggedIn: false,

    lastLoginDays: ["Monday", "Thrusday"] // array inside object
}



// --------------------
// ACCESSING OBJECT VALUES
// --------------------

console.log(user.email)           // dot notation (most common)
console.log(user["email"])        // bracket notation
console.log(user["full name"])    // bracket notation is mandatory for spaced keys
console.log(user[mySym])          // accessing Symbol key (returns string value)



// --------------------
// MODIFYING OBJECT VALUES
// --------------------

user.email = "neha456@gmail.com"   // updating property value

// Object.freeze(user)             // freezes the object
                                   // after this, no changes are allowed

user.email = "neha67@gmail.com"    // will work ONLY if object is not frozen

console.log(user)                 // prints updated object



// --------------------
// ADDING METHODS TO OBJECT
// --------------------

// Method without using object data
user.greeting = function () {
    console.log("Hello user")
}

// Method using object’s own property via `this`
user.greeting2 = function () {
    console.log(`Hello user, ${this.name}`)
}



// --------------------
// CALLING METHODS
// --------------------

console.log(user.greeting)        // prints function reference
console.log(user.greeting())      // executes function → logs message

console.log(user.greeting2())     // executes function → uses `this.name`
