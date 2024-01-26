"use strict" // compiler treats all code as newer version.
//generally we have seven types of datatypes
//1.number
//2.bigint
//3.string
//4.boolean
//5.null=standalone value
//6.undefined=means value is not assigned
//7.for uniqueness=> we use symbol datatype


let age=45
let islogged=false
let my_name="Preeti"
let large_number=1238974857348978527
let state=null

console.table([age,islogged,my_name,large_number,state])
console.table([typeof(age),typeof(islogged),typeof(my_name),typeof(large_number),typeof(state)])
console.log(typeof undefined)
//type of undefined is undefined.
//but null is an object type.