let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof(myDate));

//let MyCreatedDate = new Date(2023,0,23)
//console.log(MyCreatedDate.toLocaleDateString());
let MyCreatedDate = new Date("01-06-2023")
// console.log(MyCreatedDate.toLocaleString());


let MyTimeStamp = Date.now();
//console.log(MyTimeStamp)//1715612404199:this is the output as its the date o in miliseconds from jan 1 1970 till now
//console.log(MyCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getFullYear())
console.log(newDate.getMonth()+1)


console.log(`Today is ${(newDate.getDay())} in the month of ${newDate.getMonth()+1} in the year ${newDate.getFullYear()}` )