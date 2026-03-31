const MyObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'

}
for(const key in MyObject)
{
    console.log(key);
}
/*
js
cpp
rb
*/
for(const key in MyObject)
{
    console.log(MyObject[key])
}
/*
javascript
c++
ruby
*/

//we can also use "for in" in array
//but as object it will give the key of array which is index

const programming=["js","rb","py","java","cpp"]
for(const i in programming)
{
    console.log(i);//0 1 2 3 4 
}

for(const i in programming)
{
    console.log(programming[i]);// js rb py java cpp
}


// can we apply for in  in map



/*
const map =new Map()
 map.set('IN',"India")
 map.set('USA',"United States of America")
 map.set('Fr',"France")
 map.set('In',"India")

 for(const key in map)
 {
    console.log(key);// map is not iterable so nothing will print
 }
*/

///
