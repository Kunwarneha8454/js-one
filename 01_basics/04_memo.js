/*Stack Memory

Used for primitive types
Stores actual value
Assignment creates a copy
Change does not affect original
*/
/*
Heap Memory

Used for non-primitive types
Stores reference to value
Assignment shares same reference
Change affects original
*/

let myYt = "Blanco.com"
let myYt2 = myYt
myYt2= "Hello"
console.log(myYt)
console.log(myYt2)


let user1={
    email:"user123@gmail.com",
    upi: "user1@sbi",
}

let user2 = user1
user2.email= "user234@gmail.com"

console.log(user1.email)
console.log(user2.email)