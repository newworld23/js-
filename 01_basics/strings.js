//String concatination
const name = "bishal";
const repoCount = 50

//console.log(name + repoCount + "Value");

//in modern days we use backticks(``) string interpolation.
//here we can make placeholders and can directly inject the variable required
 

console.log(`Hello my name is ${name} and my rep count is ${repoCount}`)

const gameName = new String('bis-hal-p')
 
console.log(gameName)
console.log(typeof(gameName))
/// methods
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(6))
console.log(gameName.indexOf('p'))


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(1,2)
console.log(anotherString)

const newString1= "   bull   "
console.log(newString1.length)
console.table([newString1.trim(), newString1])//trim works only in whitespaces.


const url="https://bull.com/bishal%20patra"

console.log(url.replace('%20','-'))

console.log(url.includes('man'))

console.log(gameName.split('-'));