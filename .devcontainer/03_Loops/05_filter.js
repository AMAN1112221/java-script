/*
const coding=["js","ruby","java","python","cpp"]

const value =coding.forEach( (item)=>{
    console.log(item)
})

console.log(value)//undefined =>forearch return nothing
*/


const myNums=[1,2,3,4,5,6,7,8,9,10]
/*
const newNUms =myNums.filter( (num)=>num>4)
console.log(newNUms) //[ 5, 6, 7, 8, 9, 10 ]

const newNUms1 =myNums.filter( (num)=>{
   return  num>4
})
console.log(newNUms1) //[ 5, 6, 7, 8, 9, 10 ]
*/




const newNums=[]
myNums.forEach( (num)=>{
    if(num>4)
    {
        newNums.push(num)
    }
})

console.log(newNums);



