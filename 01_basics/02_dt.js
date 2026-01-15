"use strict"; // treat all js code as newer version

//alert(2+3) can't use it because we are using node js not browser

console.log(3+3)

console.table([3+3])

//javascript documentation in ECMAScript

let name = "Neha"
let age = 22
let isLoggedIn = true

console.table([name, age, isLoggedIn])

//7 data types: String, Number, Boolean, null,  undefined, Symbol, BigInt
//number => 2 to the power 53 
//bigint
// string => ""
// boolean => true/false
//null => standalone value (type is - object)
// undefined
// symbol => unique

//Symbol is always unique
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id===id2) // output will be false
//object
console.log(typeof null) //object
console.log(typeof undefined) // undefined



const bigNumber = 345678012345678n
console.log(bigNumber)

//Reference (Non Primitive)

//Array, Objects, Function

//1-Array

const Models = ["Kendall", "carla", "gigi","Bella"]
console.log(typeof Models)

//2-Object

let obj=  {
    name: "Neha",
    age: 22,
}

//3- Function

const myFun= function(){
    console.log("Hello World!")
}
console.log(typeof myFun)