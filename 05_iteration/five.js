const coding = ["js","ruby","java", "python"]

coding.forEach( (item)=>{
   console.log(item)
})



function printMe(item){
    console.log(item)
}

//coding.forEach(printMe)

coding.forEach((item,index, arr)=>{
    console.log(item,index,arr)
})


const myCoding = [
    {
        lang: 'js',
        langfile : "name1"
    },
    {
        lang: 'py',
        langfile : "name2"
    },
    {
        lang: 'rb',
        langfile : "name3"
    }
]

myCoding.forEach((item)=>{
   console.log(item) 
})