console.log(2>1); //true
console.log(2>=1) //ture 
// > < >= <= == !=
console.log("2">1); //true  ->automatically number me convert hogya 
console.log("02">1); // true
// note -> always prefer to take same data type 

console.log(null >0)//false
console.log(null ==0)//false
console.log(null >=0)// true -> comparision conveert null to a number ,treating it as 0

console.log(undefined ==0) // false in all case 


//strict check ===  ->check value as well as datatype 
console.log("2"==2)//true ->conversion of data type
console.log("2"===2) // false 

// JS is dynamic type language



//Summary of data type 
// two types 1> primitive 2>non primitive data type 
// Primitive ( call by value or copy ) -> 7 types:  stirng ,number ,Boolean , null ,undefined,symbol,BigInt
 

const score=100
const scorevalue=10.3
const isloggedin=false
const outsideTemp=null;
const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid)//false

const bigNumber=215564634644646//agr last me n likh denge toh wo automatically bigNumber ho jaye ga 


//Non primitive (reference type)-> Array ,Object ,Function

const heros=["shaktiman","aman","monu"]
//objects
let myobj=
{
    name:"aman",
    age:22
}


//How to know the datatype 
//typeof
