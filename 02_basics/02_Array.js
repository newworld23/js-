const animal=[ "tiger","lion","snake"];
const bird = ["crow","pegion","eagle"];
   

//animal.push(bird);//push pushes the required element to the existing array
//console.log(animal)


////const allHero = animal.concat(bird);//whereas concat returns us a new array.
//console.log(allHero)
const allHero = [...animal,...bird]//this is spread operator, works same as concat 
//console.log(allHero)


const another_array= [1,2,3,[4,5,6],7,[8,[9,10],11],15];

const real_another_array = another_array.flat(2)
console.log(real_another_array)

console.log(Array.isArray("bishal"))// checks if its an arrary or not.
console.log(Array.from("bishal"))//from converts the string to an array.

//interesting: key value pair
console.log(Array.from({name:"bishal"}))
//the the output will be a empty array as we havent specified that the array that should be made should be an key only arry or a value only array
// as {name : "bishal "}
//its a key vlue pair.


//for multiple variables

let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));