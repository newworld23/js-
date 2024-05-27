// const ele = document.getElementById("owl");
// ele.onclick= function(){
//     alert("owl");
// }


//attachEvent()
//jQuery- On

// //event object
// const ele = document.getElementById("images");
// ele.addEventListener("click",function(e1){
//    console.log("text");
// })


// const ele1 = document.getElementById("owl");
// ele1.addEventListener("click",function(e){
//    console.log("owl");
//     e.stopPropagation()
// })


// document.getElementById('google').addEventListener('click' ,function(e){
//    console.log('googleclicked')
//    e.preventDefault()
// })


const imges = document.querySelector("#images")
imges.addEventListener('click',function (e) {
   console.log(e.target.tagName);
   if(e.target.tagName === "IMG"){
      let removeit = e.target.parentNode
    removeit.remove()
   }
   
})