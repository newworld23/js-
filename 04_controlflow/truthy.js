const userEmail = []

if(userEmail){
    console.log("Got userEmail")
}
else{
    console.log("Unregistered ");
    
}

/*falsy values:
 false , 0 , -0 , big int 0n, "" , null, undefined , NaN.

 execept all are truthy valuse:
 " any value" , [] , {} , function(){} :enpty function.

 */

 if (userEmail.length === 0) {
    console.log("array is empty");
 }


 const emptyObj ={}

 if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
 }


 //Nullsih Coalescing operator (??): null undefined

 let val1;

 //val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
 console.log(val1);


 // Terniary Operator

 //condition ? ture : false


 const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less than 20") : console.log("more than 80");