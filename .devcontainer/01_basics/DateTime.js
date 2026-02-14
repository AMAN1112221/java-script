//Js suggest to use Temporal, a new date/time API

let myDate=new Date()// ye current date aa jaye ga
console.log(myDate);//2026-02-14T05:26:05.924Z
console.log(myDate.toString())//Sat Feb 14 2026 05:27:20 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getTimezoneOffset());
console.log(myDate.toUTCString());



console.log(typeof(myDate))//Object

let myCreatedDate=new Date(2023,0,23)//Months 0 se start hota hai ,ye array k trh treat hota hai
console.log(myCreatedDate.toDateString());

let mydate=new Date("2023-01-14")//YYYY-MM-DD yha months first se start hoga
console.log(mydate.toLocaleString());



let MyTimeStamp =Date.now()
console.log(MyTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());//ms me aaye ga
console.log(Math.floor(Date.now()/1000));



let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth());//2 for feb
console.log(newdate.getDay());


newdate.toLocaleString('default',{
    weekday :"long",
    
})