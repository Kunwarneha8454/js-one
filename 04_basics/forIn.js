const myObj = {
    js: 'javaScript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


// ================= for...in with Object =================

// for...in is used to loop over KEYS of an object

for (const key in myObj) {
    // key → js, cpp, rb, swift
    // myObj[key] → actual value stored at that key

    console.log(`${key} shortcut is for ${myObj[key]}`)
}



// ================= for...in with Array =================

const programming = ["js", "cpp", "rb", "java", "c"]


// When using for...in on arrays:
// i represents INDEX (0,1,2,3...)

for (const i in programming) {
    console.log(programming[i])   // accessing value using index
}
