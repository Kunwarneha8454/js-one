const coding = ["java", "python", "cpp", "js", "ruby"]


// ================= forEach with normal function =================

// forEach automatically loops through every element of the array
// "item" represents each value inside the array

coding.forEach(function (item) {
    // console.log(item)   // prints each language one by one
})



// ================= forEach with arrow function =================

// Same thing, shorter syntax

// coding.forEach((item) => {
//     console.log(item)
// })



// ================= Passing function reference =================

function printMe(item){
    // console.log(item)
}

// Here we pass FUNCTION REFERENCE (not calling it)
// forEach will call printMe for every element

coding.forEach(printMe)



// ================= Accessing index & whole array =================

// forEach gives 3 parameters:
// item → current value
// index → position
// arr → full array

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })



// ================= Objects inside Array =================

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]


// item represents EACH OBJECT in the array

myCoding.forEach((item) => {
    console.log(item.languageName)   // accessing object property
})
