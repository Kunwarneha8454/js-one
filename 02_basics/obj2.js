// --------------------
// OBJECT CREATION
// --------------------

// const user1 = new Object()  // Singleton object (created using constructor)
// Creates an object with Object constructor

const user1 = {}              // Non-singleton object (object literal)
// Most commonly used in real-world codebases

// Adding properties dynamically
user1.id = "abc45"
user1.name = "cassie"
user1.isLogin = false



// --------------------
// NESTED OBJECTS
// --------------------

const user2 = {
    email: "cassie12@gmail.com",
    fullname: {
        user2_1: {              // nested object
            firstName: "ursla",
            lastName: "Buffay"
        }
    }
}

// Accessing deeply nested properties
console.log(user2.fullname.user2_1.lastName)



// --------------------
// MERGING OBJECTS
// --------------------

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// This creates a nested object, not a merge
// const obj3 = { obj1, obj2 }

// using Object.assign()
// First argument {} ensures original objects are not mutated
// const obj3 = Object.assign({}, obj1, obj2)

// Best practice (Spread operator)
// Cleaner, faster, more readable
const obj3 = { ...obj1, ...obj2 }

console.log(obj3)



// --------------------
// ARRAY OF OBJECTS
// --------------------

// Common structure used in APIs and databases
const users = [
    {
        id1: 1,
        email: "hello1@gmail.com"
    },
    {
        // empty object placeholder
    },
    {
        // empty object placeholder
    }
]

// Accessing object inside array
users[1].email   // undefined (email key does not exist)

// --------------------
// OBJECT UTILITY METHODS
// --------------------

console.log(user1)

// Returns array of keys
console.log(Object.keys(user1)) 
// Example output → ["id", "name", "isLogin"]

// Returns array of values
console.log(Object.values(user1))
// Example output → ["abc45", "cassie", false]

// Returns array of key-value pairs
console.log(Object.entries(user1))
// Example output → [["id","abc45"],["name","cassie"],["isLogin",false]]

// Checks if property exists directly on the object
console.log(user1.hasOwnProperty("isLogin")) // true
