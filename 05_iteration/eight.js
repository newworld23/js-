const arr = [ 1,2,3,4]

const myTotal = arr.reduce((acc,curval)=>{
    console.log(`acc:${acc} and curval: ${curval}`)
    return acc + curval
},0)

console.log(myTotal)


const ShoppingCart = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, price: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, price: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, price: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, price: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, price: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, price: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, price: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, price: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, price: 1989 }

]

const TotalPrice = ShoppingCart.reduce((acc,bk)=>acc + bk.price,0)

console.log(TotalPrice)