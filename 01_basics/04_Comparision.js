//comparision operator ususally returns boolean
 //in case of comparing same data types its noramally easy 
 // the main problem comes when we compare two different data types
//the  main rule we need to keep in mind is that when we want to compare we should compare the same data types.

 console.log("2">1);
 console.log("0">1)

 console.log(null > 0); //false
 console.log(null == 0);//false
 console.log(null>=0); //true
 /* the reason  is that an equality check == and comaparisions < > >= <= works differently
 comparision converts null to a number , treating it as 0.
 thats why (3) null>= 0 is true and  null>0 is false*/


 // equality check
 // === "strict equallity" here the value and the datatypes is also checked
 console.log("2"===2) //false