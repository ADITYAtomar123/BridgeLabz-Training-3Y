// "use strict" use to fix bug
// a ="hello"
// console.log(a);


// "use strict"
// function fun(a,a){
//     console.log("hi");
// }
// fun(10,20);



// function expression
// let add=function(a,b){
//     return a+b;
// }
// let a=add(10,20);
// console.log(a);


// Arrow function
// let add=(a,b)=>{
//     return a+b;
// }
// let a=add(10,20);
// console.log(a);




// Type conversion
// implicit conversion

// let result="Hello"+5;
// console.log(result); Hello5
// console.log(typeof result); String

// let result1 = 10-"4";
// console.log(result1); 6
// console.log(typeof result1) Number

// console.log(true+3)  ->4
// console.log(false+5) ->5

// let result2="Value is"+true;
// console.log(result2); Value istrue
// console.log(typeof result2) String



// Explicit conversion -> You manually convert one type to another

// String to Number
// let strNum="123";
// let num=Number(strNum);
// console.log(num,typeof num) ->123 Number 

// let str="45.67"
// let num=parseFloat(str);
// console.log(num,typeof num) -> 45.67 Number


// Number to String
// let num=123;
// let strNum=String(num);
// console.log(strNum,typeof strNum); -> "123" String


// Boolean to Number
// let bol=true;
// let num=Number(bol);
// console.log(num,typeof num); 1 Number


// Create a func to adding two Number

// Function declaration
// function add(a,b){
//     return a+b;
// }
// add(10,20);


// Function expression
// let add=function (a,b){
//     // return a+b;
//     console.log(a+b);
// }


// // Arrow function
// let addd=(a,b)=>{
//     return a+b;
// }



// function calculate(a,b,callback){ //higher-order function
//     return callback(a,b);
// }
// calculate(10,20,add);


// let arr=[1,2,3,4,5,6];
// let fun=(x) =>{
//     return x*2;
// }

// let result=arr.map(fun);
// console.log(result);


// filter use for conditon true then he will work
// let res=arr.filter((x)=>{
//     return x%2==0;
// })
// console.log(res);



let arr=["apple","mango","banana","apple","orange"]
let res=arr.filter((x)=>{
    if(x!="apple") return x;
})
console.log(res)