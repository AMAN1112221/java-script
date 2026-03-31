const coding=["js","ruby","python","cpp"]

coding.forEach(  function (item){
    console.log(item)
})
/*
js
ruby
python
cpp
*/
//or
coding.forEach(  (item)=>{
    console.log(item);
})
/*
js
ruby
python
cpp
*/

//or

function printme(item){
    console.log(item);
}

coding.forEach(printme)

/*
js
ruby
python
cpp
*/

coding.forEach( (item ,index,arr)=>{
    console.log(item,index,arr);
})
/*
js 0 [ 'js', 'ruby', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'python', 'cpp' ]
python 2 [ 'js', 'ruby', 'python', 'cpp' ]
cpp 3 [ 'js', 'ruby', 'python', 'cpp' ]
*/


const myCoding =[
    {
        languageName:"javscript",
        languageFileName:"js"
    },
     {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
})
/*
javscript
java
python
*/