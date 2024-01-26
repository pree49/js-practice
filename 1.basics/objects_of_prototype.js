//methods of protype
const gameName = new String('hi preeeti')
// console.log(gameName.length)


// //prototype mein jinke aage f hai vo saare
// // ke saare functions hai


// //for converting lowercase to uppercase
// //but it does not change our original string
// console.log(gameName.toUpperCase());

//for seeing character at which position
// console.log(gameName.charAt(5));


//if we want to know that our t is at which position

// console.log(gameName.indexOf('t'))

//try to learn more methods of prototype

// const newString = gameName.substring(0 , 4)  //note one thing the value which you have included in the last
//is not gets included

// console.log(newString)

// const anotherString = gameName.slice(-5 , 7)
// console.log(anotherString) //in this string gets printed from last 
//values.

//in substring we cant start values from negative 

//values will be only from zeroes

//method for removing spaces

const newString = "  preeti  ";
console.log(newString);
console.log(newString.trim()); 

//now string with removed spaces gets printed

//for replacing the words

const url="https://preeti.com/preeti%12shukla"

console.log(url.replace('%12','-'))

//strings are very useful for knowing so read it carefully

//in any languages strings are most powerful

//with the help of the word we also comes to know that any word is present in the 
//string or not-->answer comes out in true 
//and false form

console.log(url.includes('preeti'))

const preetiuser = new String('nonnu-papa-mumma-preeti')

//if we want to convert the string on the basis of the 
//-in arrays then we can also perform this task

console.log(preetiuser.split('-'))


























