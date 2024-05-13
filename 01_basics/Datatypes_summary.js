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


/**********************MEMORY******************/

//stack (primitive)
//heap (non primitive)

let myYoutubeName = "bishalpatra"

let anotherName = myYoutubeName
anotherName="chai"
console.log(anotherName);
console.log(myYoutubeName);


let userOne = {
    email: "user@gmail.com",
    upi: "user1ybl"
}

let userTwo = userOne;

userOne.email = "usg@mail.com"


console.log(userOne)
console.log(userTwo)