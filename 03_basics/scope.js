// Global Scope
// Variables declared here are accessible throughout the entire file
var c = 300;

if (true) {
    // Block Scope
    // let and const are limited to this block only

    let a = 10;     // Block scoped
    const b = 20;  // Block scoped

    // var is NOT block scoped
    // This overwrites the global variable `c`
    var c = 30;
}

// Outside the block:
// a -> not accessible
// b -> not accessible
// c -> accessible (value is now 30)



// ================= FUNCTIONS & LEXICAL SCOPE =================

function one() {
    const user = "amy";   // Function scoped

    function two() {
        const website = "flow.com"; // Inner function scope

        // Inner functions can access parent variables (closure)
        // console.log(user);
    }

    // Parent functions cannot access child variables
    // console.log(website); // ReferenceError

    two();
}

one();



// ================= BLOCK SCOPE WITH NESTED IF =================

if (true) {
    const user = "amy02";

    if (user === "amy02") {
        const website = "flow.com";

        // Both user and website available here
        // console.log(user + website);
    }

    // website not accessible here
}



// ================= HOISTING =================

// Function declarations are hoisted
console.log(addOne(5)); // Works

function addOne(value) {
    return value + 1;
}


// Function expressions are NOT hoisted
console.log(addTwo(5)); // Error: Cannot access 'addTwo' before initialization

const addTwo = function (value) {
    return value + 2;
};