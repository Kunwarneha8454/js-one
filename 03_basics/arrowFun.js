const user = {
    username: "amy",
    age: 22,

    // Regular function inside object
    // Here `this` refers to the `user` object
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // whole user object
    }
};

// user.welcomeMessage();
// user.username = "Mona";
// user.welcomeMessage();
// console.log(this); // global object (or {} in Node)



// ================= REGULAR FUNCTION =================

// function msa(){
//     const user = "rachel"; // Local variable (NOT part of `this`)

//     // JS tries to find this.user → doesn't exist
//     // because user is NOT attached to this
//     console.log(this.user); // undefined
// }
// msa();



// ================= FUNCTION EXPRESSION =================

// const msa = function(){
//     const user = "rachel"; // still just a local variable

//     // Same result → undefined
//     console.log(this.user);
// }



// ================= ARROW FUNCTION =================

const msa = () => {
    const user = "rachel"; // Local variable again

    // Arrow functions DON'T have their own `this`
    // They inherit `this` from global scope
    // Global scope has no `user`
    console.log(this.user); // undefined
};

// msa();



// ================= ARROW FUNCTION RETURNS =================

// Explicit return (needs return keyword)
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit return (single line)
// const addTwo = (num1, num2) => num1 + num2;

// Parentheses version
// const addTwo = (num1, num2) => (num1 + num2);

// Returning OBJECT from arrow function
// Must wrap object in ()
const addTwo = (num1, num2) => ({ user: "amy" });

console.log(addTwo(2, 3));



// ================= ARRAY CALLBACK =================

// const myArr = [2,5,3,7,8];

// Arrow functions commonly used in callbacks
// myArr.forEach(() => {});