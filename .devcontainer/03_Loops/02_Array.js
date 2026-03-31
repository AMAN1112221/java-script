// for of

//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]
for(const num of arr)
{
      console.log(num);
}


const greetings="Hello world !"
 for(const greet of greetings)
 {
    console.log(greet)
 }


 //Maps

 const map =new Map()
 map.set('IN',"India")//key value
 map.set('USA',"United States of America")
 map.set('Fr',"France")
 map.set('In',"India")// its takes unique key value if its same then it will be updated

console.log(map);

//Map(4) {
//  'IN' => 'India',
//  'USA' => 'United States of America',
//  'Fr' => 'France',
//  'In' => 'India'
//}

//How to apply loops

for(const key of map)
{
    console.log(key);// output in form of array
}
//[ 'IN', 'India' ]
//[ 'USA', 'United States of America' ]
//[ 'Fr', 'France' ]
//[ 'In', 'India' ]

for(const [key,value] of map)
{
    console.log(key,'=',value);
}
/*IN = India
USA = United States of America
Fr = France
In = India*/


const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}

/* for(const ob of myObject)
{
    console.log(ob);// error myObject is not iterable
}
    */

/*

for(const [key ,value]of  myObject)
{
    console.log(key,':-',value);//myObject is not iterable
}

*/



