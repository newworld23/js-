 const myArr = [0,1,2,3,4,5]
 //array can hold different data types
 const myHero = ["spiderman", "flash"];

 const myArray = new Array(1,2,3,4,5,6,7,8,9)
 console.log(myArray)

 console.log(myArr[0]);

//Array Methods

myArr.push(6);//push  add the the  declared element to the array at the end position.
myArr.pop();//pop removes the last element from the array.
myArr.unshift(9);//unshift adds the required element in the start of the array.
myArr.shift();// removes the elements from the start.

console.log(myArr.includes(6))//checks if the element is present on the array or not. 
console.log(myArr.indexOf(8))// checks the index of the element i the array.if that element is nit present it returns -1.

const newArr = myArr.join();//join makes the array a string , we can check by using typeof.

console.log(myArr);
console.log(newArr)

// slice & splice


//note:when we use splice the original array isnt altered  but when we use splice the original array gets altered.


console.log("A",myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);
console.log("c",myArr)
console.log(myn2)