// ----------- Date ----------- //

let myDate = new Date();
// Creates a Date object with current date & time

console.log(myDate.toString());
// Full date + time + timezone (human-readable)

console.log(myDate.toDateString());
// Only date part (no time)

console.log(myDate.toJSON());
// JSON-compatible date format (ISO style)

console.log(myDate.toLocaleDateString());
// Date formatted according to local settings

console.log(myDate.toISOString());
// Standard international format (used in APIs)

console.log(typeof myDate);
// Object (Date is a built-in object)


// Creating a custom date (Year, Month, Day)
// Month starts from 0 → Jan = 0, Feb = 1
let myCreatedDate = new Date(2023, 1, 23);
console.log(myCreatedDate.toDateString());


// Creating date using string format
let myCreatedDate2 = new Date("01-14-2013");
console.log(myCreatedDate2.toLocaleDateString());


// Timestamp → milliseconds since Jan 1, 1970
let myTimeStamp = Date.now();

console.log(myTimeStamp);
// Current timestamp

console.log(myCreatedDate2.getTime());
// Timestamp of specific date


// Convert milliseconds to seconds
console.log(Math.floor(Date.now() / 1000));


// Working with date methods
let newDate = new Date();
console.log(newDate);

// Month starts from 0, so +1 for real month
console.log(newDate.getMonth() + 1);

// Day of week (0 = Sunday)
console.log(newDate.getDay());


// Custom date formatting
newDate.toLocaleString('default', {
    weekday: "long"
});
// Returns full weekday name (e.g., Monday)
