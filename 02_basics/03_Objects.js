// singleton
//object lterals

const mySym = Symbol("key1")

const jsUser ={
    name: "bishal",
    "full name" : "Bishal Patra",
    [mySym]: "mykey1",
    age : 23,
    email : "bishalpatra45555@gmail.com",
    location : "Bangaluru",
}

console.log(jsUser.age)
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email ="bull@gmail.com"
//Object.freeze(jsUser);

console.log(jsUser)


jsUser.greeting =function(){
    console.log("hello JSUser")
}

jsUser.greetingTwo = function(){
    console.log(`hello Jsuser ${this.name}`);
}
 console.log(jsUser.greeting())
 console.log(jsUser.greetingTwo())