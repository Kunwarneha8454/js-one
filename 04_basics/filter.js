// ================= forEach DOES NOT return =================

// const coding = ["java", "python", "cpp", "js", "ruby"]

// const values = coding.forEach((item)=> {
//     console.log(item)
//     return item;   // return is ignored by forEach
// })

// console.log(values) 
// undefined because forEach NEVER returns anything



// ================= filter() example =================

const myNums = [1,2,3,4,5,6,7,8,9,10]


// filter returns a NEW ARRAY based on condition

// Short syntax (implicit return)
// const newNums = myNums.filter((num) => num > 4)


// Long syntax (must use return keyword)
// const newNums = myNums.filter((num) => {
//     return num > 4
// })



// ================= Same thing using forEach =================
// Manual way (not recommended)


// const newNums = []

// myNums.forEach((num)=> {
//     if(num > 4){
//         newNums.push(num)
//     }
// })



// ================= Books Array =================

const books = [
    {
        title: "Clean Code",
        genre: "Programming",
        publisher: "Prentice Hall",
        edition: "1st"
    },
    {
        title: "Atomic Habits",
        genre: "Self Improvement",
        publisher: "Penguin Random House",
        edition: "2nd"
    },
    {
        title: "The Alchemist",
        genre: "Fiction",
        publisher: "HarperCollins",
        edition: "3rd"
    },
    {
        title: "You Don't Know JS",
        genre: "JavaScript",
        publisher: "O'Reilly Media",
        edition: "2nd"
    },
    {
        title: "verity",
        genre: "Fiction",
        publisher: "colleen houver",
        edition: "1st"
    },
    {
        title: "Deep Work",
        genre: "Productivity",
        publisher: "Grand Central Publishing",
        edition: "2nd"
    }
];



// ================= Filtering books =================

// Example 1: Filter by genre
// const userBooks = books.filter((bk) => bk.genre === 'Fiction')


// Example 2: Filter by title

const userBooks = books.filter((bk) => {
    return bk.title === 'Deep Work'
})

console.log(userBooks)
