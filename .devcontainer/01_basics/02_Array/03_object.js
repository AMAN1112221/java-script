//singleton =>constructor se bne ga 

//object literals 

//declaration of symbole as a key
const mysym=Symbol("key1")

const Jsuser={
    "fullname":"Aman kumar keshri ",
    name :"Hitesh", //in object we will defined key ans value // yha key as a string hai "name"
    [mysym] :"mykey1",
    age :18,
    location :"jaipur",
    email :"amankeshri@gmail.com",
    IsLoggedIn :false,
    lastlogindays:["monday","saturday"]
}

//How to access the object
console.log(Jsuser.email)
//or
console.log(Jsuser["email"])
console.log(Jsuser["fullname"])
console.log(Jsuser[mysym])

//Now how to change the value
Jsuser.email="hitesh@gamol.com"
console.assert(Jsuser)

//If we want to freeze the value so that no body can change 
//Object.freeze(Jsuser)
Jsuser.email="monu@changedmail"
console.log(Jsuser)

Jsuser.greeting=function(){
    console.log(`Hello JS user,${this.name}`);
    
}
console.log(Jsuser.greeting())


