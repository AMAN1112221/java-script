console.log("aman"+"kumar")
const name="rajesh"
const repo=50
console.log(name+repo)
 // best method 
 console.log(`hello my name is ${name} and my repo count is ${repo}`);
 // declaration 
 const gameName=new String ('aman')
 console.log(gameName[0]);// yha ye object hai and ye key value pair me hai [0]:a [1]:m
 console.log(gameName.__proto__); // {} means object 


 console.log(gameName.length);//4
 console.log(gameName.toUpperCase());// all char will become capital 
 console.log(gameName.charAt(2));// a
 console.log(gameName.indexOf('m'))//1
 console.log(gameName.indexOf('k'))//-1
 

 const newString =gameName.substring(0,2);// slice 01
 console.log(newString);

 const gameplay=new String("whathappend")//lenght 11
 const anotherString=gameplay.slice(-8,10);  //11-8=7 ->7 to 10 ->always check with lenght 
 const another1String=gameplay.slice(-4,10);
 console.log(anotherString);
 console.log(another1String);


 const newStringOne="      hitesh          ";
 console.log(newStringOne);
 console.log(newStringOne.trim()); //extra space hta deta hai  


 const url ="https://hitesh.com/hitesh%20choudhary"
 url.replace('%20','_');// remove%20 and add in that place with _

 console.log(url.includes('sundar'))//false 

//string to array
 const Name2=new String("hello-i-am-aman");
 console.log(Name2.split('-'));   // [ 'hello', 'i', 'am', 'aman' ]

