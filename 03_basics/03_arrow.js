const user ={
    username:"bishal",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)
    }
}//this reffers to the current context.

//user.welcomeMessage()
//user.username= "sam"
//user.welcomeMessage()

//console.log(this)

//function chai() {
//console.log(this);
//}
//chai()



const  chai = () =>{
    console.log(this)
}
//chai()


// arrow function syntax : () => {}

//const addTwo = (num1 , num2) =>{
//    return num1 + num2
//}
// const  addTwo = (num1,num2) =>num1 + num2//implicit return
//const  addTwo = (num1,num2) =>( num1 + num2)
const addTwo = ()=> ({username :"bishal"})

//note : we can never return an object using curly braces.
console.log(addTwo(1,2))
