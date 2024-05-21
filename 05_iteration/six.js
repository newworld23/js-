const coding = ["js","ruby","java", "python"]


const value = coding.forEach((item)=>{
    console.log(item);
})

//console.log(value)

const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum.filter((num)=> num >4)

console.log(newNum);

//important when w use {} in a call back we have to use the return keyword
const myNum1 = [1,2,3,4,5,6,7,8,9,10]

const newNum1 = myNum1.filter((num)=> {
    return num >4
})

console.log(newNum1);

const MyNumbers = []

myNum.forEach((num)=>{
    if(num>4){
        MyNumbers.push(num)
    }
})
console.log(MyNumbers);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBook = books.filter((bk)=> {
    return bk.genre === "Science"
  })
  userBook = books.filter((bk)=> {
    return bk.publish >= 1900 && bk.genre === "History"
  })
  console.log(userBook);


  