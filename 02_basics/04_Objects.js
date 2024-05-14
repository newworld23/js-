//const tinderUser = new Object();// this is a singleton object
 const tinderUser ={}// this is not a  sigleton object
 
 tinderUser.id ="123abc"
 tinderUser.name = "Sam"
 tinderUser.isLoggedIn =false
//console.log(tinderUser)

const regularUser = {
    email: "son@gmail.com",
    fullname : {
        userFullname : {
            firstname: "hitesh",
            lastName :"tiwari"
        }
    }
}

//console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}

//const obj = Object.assign({}, obj1,obj2);


const obj = {...obj1,...obj2}
console.log(obj);