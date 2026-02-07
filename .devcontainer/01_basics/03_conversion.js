let score="33"

console.log(typeof score)//number =>in lower case

let valueInNumber=Number(score) // convert krne k liye capital me N likhna hoga=>number
console.log(typeof(valueInNumber))

let marks="33abc"
let value=Number(marks) //number
console.log(typeof value) // number=> type has been changed but to confirm it check value 
console.log(value)  //NaN   =>Not a Number 


let myscore=null
console.log(myscore)//null
console.log(typeof myscore) //object

let myscoreint=Number(myscore)
console.log(myscoreint)// 0 
console.log(typeof myscoreint)//number

let my1score=undefined
console.log(my1score)  //undefined
console.log(typeof my1score) //undefined

let my1scoreint=Number(my1score)
console.log(my1scoreint)//Nan
console.log(typeof my1scoreint)//number



// 1=> true 0=>false 
//" "=>false  
// "aman"=>true // when we convert it form string to boolean