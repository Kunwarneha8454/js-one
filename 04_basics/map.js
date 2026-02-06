const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ================= Method Chaining =================

// map() → transforms every element and returns a NEW array
// filter() → selects elements based on condition

const newNums = myNums
                   .map((num)=> num * 10)     // Step 1: multiply each value by 10
                   // Result: [10,20,30,40,50,60,70,80,90,100]

                   .map((num)=> num + 1)      // Step 2: add 1 to every value
                   // Result: [11,21,31,41,51,61,71,81,91,101]

                   .filter((num)=> num >= 40) // Step 3: keep only numbers >= 40
                   // Result: [41,51,61,71,81,91,101]

console.log(newNums)
