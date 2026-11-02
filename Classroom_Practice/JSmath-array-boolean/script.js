// console.log("Hello")
// Math
// let a=4.5
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.pow(2,3)); //8


// let num=Math.random() 0.000----0.9999
// let num=Math.floor(Math.random()*10); //0-9
// let num =Math.floor(Math.random()*200)+1 //1-200
// let num =Math.floor(Math.random()*100)+500 //500-600



// let min=5000
// let max=6000
// let num=Math.floor(Math.random()*(max-min))+min //Universal formula
// console.log(`random number ${num}`);



// Task-2 Create a rondom OTP generator func
// function generateOtp(){
//     let min=0000;
//     let max=9999;
//     let num=Math.floor(Math.random()*(max-min))+min;
//     console.log(num);
// }
// generateOtp();




// Arrays
// let arr=[1,2,"hi",true,"hello"];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.push("ram")
// for(let x of arr){
//     console.log(x);
// } insert at last



// arr.unshift("ram")
// for(let x of arr){
//     console.log(x);
// } //insert at starting

// let s="";
// for(let i=0;i<arr.length;i++){
//     s +=arr[i]+" ";
// }
// console.log(s); print in one line 



// console.log(arr.slice(1,4)); 1 se lekar 3 tk



// Task-3 Generate rondom hex-color value
// function generateHexColor(){
//     let arr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
//     let ans="#";
//     for(let i=0;i<6;i++){
//         ans +=arr[Math.floor(Math.random()*15)];
//     }
//     console.log(ans);
//     document.body.style.backgroundColor=ans; // also change color of background with use of generate hexcolor on click of button
// }
// generateHexColor();



// Boolean
// true "ajhsfgs",1,-1,[],{}
// false "",0,-0,null,undefined,NaN