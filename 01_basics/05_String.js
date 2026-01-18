const name = "Neha"
const repo =50
console.log(`Hello my name is ${name} and my repo count is ${repo}`); //string interpolation

const str = new String('Harry-Styles-com')
console.log(str[0])
console.log(str.__proto__)

console.log(str.length)
console.log(str.toUpperCase())
console.log(str)

console.log(str.charAt(3))
console.log(str.indexOf('y'))

const sub = str.substring(0,4)
console.log(sub)

const sli = str.slice(0,5)
console.log(sli)

const url = "https://google.com/google%20doodle"
console.log(url.replace('%20', '_'))

console.log(url.includes('Styles'))
console.log(str.split('-'))