// Primitive number
const score = 400; 
// JS implicitly detects the type as Number
console.log(score);

// Number object (not commonly used)
const bal = new Number(100); 
// Explicitly creates a Number object
console.log(bal);

// Converts number to string, then gets length
console.log(bal.toString().length);

// Rounds number to fixed decimal places
// Used for precision (mostly in currency values)
console.log(bal.toFixed(2));

const otherNum = 123.7865;
// Formats number to given total significant digits
console.log(otherNum.toPrecision(3));

const hundreds = 10000000;
// Converts number to locale-specific format
// 'en-IN' → Indian number system
console.log(hundreds.toLocaleString('en-IN'));
// Default is 'en-US'


// ----------- Math Object ----------- //

// Converts negative to positive value
console.log(Math.abs(-4));

// Rounds to nearest integer
console.log(Math.round(4.6));

// Always rounds UP
console.log(Math.ceil(4.2));

// Always rounds DOWN
console.log(Math.floor(4.9));

// Generates random number between 0 and 1
// Multiply to increase range, +1 to avoid 0
console.log((Math.random() * 10) + 1);

// Random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// Random integer between min and max (inclusive)
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
