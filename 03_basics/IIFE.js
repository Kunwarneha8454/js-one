// Immediately Invoked Function Expressions (IIFE)

// Purpose:
// Prevent global scope pollution
// Execute code immediately without leaving variables in global memory

(function one() {
    // Named IIFE
    // Runs instantly as soon as JS reads it
    // Variables here stay private to this function

    console.log(`DB CONNECTED`);
})();


// Arrow Function IIFE with parameter

((name) => {
    // Anonymous Arrow IIFE
    // Accepts arguments like normal functions
    // Useful for one-time setup logic (DB, config, initialization)

    console.log(`DB CONNECTED TWO ${name}`);
})('Mona');