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

const user = [
    {
        id: 1,
        email: "hb@gmail.com"
    },
    {
        id: 1,
        email: "hb@gmail.com"
    },{
        id: 1,
        email: "hb@gmail.com"
    }
]

//when we get data from a database then it comes in the form of array of objects.
// so we can use the index as we use in array to access a particular element in an array. and when we need to access a data inside the object we can use the "." notation to access the key value of the data we require.

console.log(user[1].email);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('IsLoggedIn'));



const course = {
    coursename : " javascript",
    price: "999",
    courseInsructor : "Bishal"
}

const {courseInsructor : instructor} = course // here we destructured the object : this is called as object Destructuring.
//console.log(courseInsructor)
console.log(instructor);

