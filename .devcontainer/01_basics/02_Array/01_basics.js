//array->object 
// we can change the size of array in java script 
const myArr=[0,1,2,3,4,5]
console.log(myArr[0]);

// Array methods
myArr.push(7)
console.log(myArr);

myArr.unshift(9)//element added in front 
myArr.shift()//element removed from front 


console.log(myArr.includes(9));//true or false ->boolean
console.log(myArr.indexOf(2));

const newArr=myArr.join()//->adds all the elements of an array into a string 
console.log(myArr);//[0,1,2,3,4,5,7]
console.log(newArr)//0,1,2,3,4,5,7
console.log(typeof newArr);// stirng 


//slice splice

console.log("A" ,myArr);  //A [0,1,2,3,4,5,7]
const myn1=myArr.slice(1,3)

console.log(myn1);//[1,2]
console.log("B ",myArr);//B [0,1,2,3,4,5,7]
const myn2=myArr.splice(1,3)// veryImportant ->original array se wo element delete ho jaye ga
console.log("c ",myArr);// c  [ 0, 4, 5, 7 ]
console.log(myn2);//[ 1, 2, 3 ]




