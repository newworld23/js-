

if(true){
    let a =10
    const b =20;
    var c = 30;
}

//console.log(a)
//console.log(b)
//console.log(c)



// scopes are mainly global scope and local scope

/*
{
    what ever code writen inside of these curly braces is reffered as local scope
}
 And out side these curly braces  is reffered as Globalscope. 
*/

let name = "bishal"
if(true){
  let name = "bull"
 // console.log(name)
}
//console.log(name)

// in the above code we have a variable "name" but we have assigned different values to it.
// when we het the value as bull it because we declared it inside a local scope and we get bishal because its declared on a global scope.



function one(){
    const username="bishal"

    function two(){
        const website  ="youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

one()
//when we are dealing with nested function the child function can access the parent function.


if(true){
    const username ="bishal"
    if(username=="bishal"){
        const website ="youtube"
        console.log(username + website)
    }
    //console.log(website); error1
}
//console.log(username); error2



//++++++++++interesting+++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1;

}



const addtwo = function(num){
    return num+2
}
addtwo(5)