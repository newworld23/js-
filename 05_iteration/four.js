const myObject ={
    js: "javascript",
    cpp : "C++",
    rb: "ruby",
    swift: "swiftbyapple"
}

for (const key in myObject) {
 console.log(`${key} shortcut us for ${myObject[key]}`);

}

const programming = ["js","cpp","rust","rb"]

for (const key in programming) {
   
    console.log(programming[key])
}