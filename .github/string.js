const name = "preeti";
const repoCount = 47;

// console.log(name + repoCount + "Value")
//with this we get the value but this is not 
//good way for the future

console.log(`name is ${name} and my repo is ${repoCount} and have a value`);
//this syntax is much better comparitively the 
//previous one.


//well there is one more way to declare a string

const gameName = new String('hi preeeti')
//new is a keyword in javascript used to create objects of javascript
//i dont know completely only this

//Accessing of key values-->
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);

//so now we comes to know about accessing the key values
//here pair of first keyvalue comes out

//now we also access here the prototypes

console.log(gameName.__proto__);

//this is basically for showing the prototypes.

//in output we get the {} empty curly braces
//but in actual it is not empty it has a lot of values
//lets see it in console

