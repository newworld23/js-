const score = 400;
//console.log(score)
const balance = new Number(400);//we are spcifying that the datatype wwe are using is a number.
//console.log(balance)

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));//mainly usefull while making a e-com website for calculating gst or billing with a precision value

const otherNumber =123.2566

console.log(otherNumber.toPrecision(3))

const hundreds= 1000000;
//console.log(hundreds.toLocaleString('en-IN'));//en-In makes it in indian Number system


/**********maths *********************/

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3))//round off's to upper
console.log(Math.floor(4.6))// rounds off's to lower.
console.log(Math.min(4,5,6,))// finds the min value
console.log(Math.max(4,5,6,))// finds the maximum value


console.log(Math.random());///the value of Math.random always comes from 0 to 1. mostly decimal.
 console.log((Math.random()*10) +1);
 console.log(Math.floor(Math.random()*10) +1);

 const min = 10;
 const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min)