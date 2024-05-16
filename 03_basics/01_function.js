function  sayMyName(){
    console.log("B")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("L")

}

//sayMyName()

function addTwoNum (a,b){
 return a+b;
}

const result = addTwoNum(11,"12")

//console.log("Result", result);

function LoginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a Username")
        return;
    }
    return `${username} just logged in`
    
}

//console.log(LoginUserMessage())

function calculateCartPrice(...num1){
    return num1;

}
//here "..."is rest operator
console.log(calculateCartPrice(200,400,500))

const user ={
    username: "bishal",
    price: 159
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

handleObject(user)

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue([200,400,5,600]))