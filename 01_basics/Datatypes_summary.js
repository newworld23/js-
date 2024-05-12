// # primitive datatypes : callByValue
//7 types : string , Number , boolean, null, undefined, symbol,bigint

// reference (Non primitive)
// Array , Object, Functions

const  Array =[ "spider", "bat", "snake"];

let myobj ={
    name: "bishal",
    age: 24,
}

const myFunction = function(){
    console.log("hello world")
}

console.table([typeof(myobj),typeof(Array),typeof(myFunction)])