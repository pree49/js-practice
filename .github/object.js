const score=100
const scorevalue=100.3;

const isLoggedIn = false;
const outsidetemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 324561789n; //bigint comes out.

const heroes = ["shaktiman","naagraj","doga"]

let myobject=
{
  name : "preeti",
  age : 20,
}

const myfunction=function() {
console.log("hello world"); 
}

console.log(typeof bigNumber);



console.log(typeof outsidetemp);
console.log(typeof myfunction);
//they are showing the data type of function 
//but in actual its datatype is function object



console.log(typeof heroes);

//note one point :Return type of 
//arrays , objects , is basically the
//function  but the datatype of function is function object


