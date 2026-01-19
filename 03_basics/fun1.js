// Function declaration: defines a reusable block of code
function myName() {
    // Executes statements sequentially
    console.log("hello");
    console.log("hey");
    console.log("hi");
}

// Function invocation: runs the function
myName();


// Function with parameters: accepts inputs to perform operations
function addNums(num1, num2) { 
    // Local variable to store the computed sum
    let result = num1 + num2;

    // Return sends the value back to the caller
    return result;
}


// Function with a default parameter value
function loginUsermsg(username = "Ne") { 
    // Defensive check: ensures a valid username exists
    // (This condition is redundant when a default value is set)
    if (username === undefined) {
        console.log("Please enter a username!");
        return;
    }

    // Template literal used for dynamic string construction
    return `${username} just logged in`;
}


// Function call with arguments
const result = addNums(2, 3);

// Logging the returned value from addNums
console.log("Result:", result);


// Function call without passing an argument
// Default parameter value ("Ne") will be used
console.log(loginUsermsg());
