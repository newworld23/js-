/*IIFE : Immedietly Invoked Function Expression : As per the name says Immedietly Invoked Function Expression so this
 mainly is helpful beacuse sometimes we face problem due to the global scope pollition so to reduce that we use IIFE.
 i.e IIFEs prevent pollution of the global JS scope. In a traditional function, if you create a variable within the function, it is accessible in the global object. 
 If you define a variable in an IIFE, it is accessible only directly within the function.
 Global scope Pollution:  you define too many variables that are globally accessible.
*/
/* the below line of code is a noramlly invoked function without IIFE
function chai(){
    console.log("DB connected");
}

chai()
*/
(function chai(){
    //named IIFE
    console.log("DB connected");
})(); // we have explicitly used ";" so that the IIFE knows where to end or stop the context.

/*
IIFE Syntax

(function defination)(execution call)


important note: IIFE immedietly invokes  a function but it doesnt known when to stop a context so we need to use ";" to avoid error.
*/
//arrow function
((name) =>{
    //unnamed IIFE
    console.log(`db connected ${name}`);
})("bishal")