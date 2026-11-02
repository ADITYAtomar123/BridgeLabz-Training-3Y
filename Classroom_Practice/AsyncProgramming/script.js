// console.log("start")

// // Asynchronus setTimeout func
// setTimeout(()=>{
//     console.log("hello");
// },3000)


// setTimeout(()=>{
//     console.log("Welcome")
// },1000)


// console.log("end");


// Asynchronus task ko synchronus way mai handle krne ke liye
// callack,promise,async await use krte hai


// callback
// function getUser(callback){
//     setTimeout(()=>{
//         console.log("user data....")
//         callback();
//     },3000)
// }

// function getuserBankDetail(callback){
//     setTimeout(()=>{
//         console.log("User Bank detail")
//         callback()
//     },1000)
// }

// function getuserEmp(){
//     setTimeout(()=>{
//         console.log("emp detail")
//     },2000)
// }

// // getUser();
// // getuserBankDetail();


// // callback hell
// getUser(()=>{
//     getuserBankDetail(()=>{
//         getuserEmp()
//     })
// })




// Promise

// let mypromise=new Promise((resolve,reject)=>{
//     let age=10;
//     if(age>18){
//         resolve();
//     }
//     else reject();
// })

// mypromise
// .then(()=>{
//     console.log("age valid")
// })
// .catch(()=>{
//     console.log("age invalid")
// })


// // Async

// async function call(){
//     await getUSer();
//     await getuserBankDetail();
// }



// console.log("HI")
// let a = new Promise((resolve,reject)=>{
//     // resolve("Data has to be done")
//     reject("No data is there")
// })

// // a.then((value)=>{
// //     console.log(value);
// // })
// a.catch((value)=>{
//     console.log(value);
// })



// let a = new Promise((resolve,reject)=>{
//     let data=49;
//     if(data){
//         resolve("Data is present");
//     }
//     else reject("No data");
// })
// a.then((value)=>{
//     console.log(value);
// })
// a.catch((err)=>{
//     console.log(err);
// })



// promise.all([a(),b(),c()]).then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
// });


// Multiple func call
// a.then((value)=>{
//     b(value)
// }).then((value)=>{
//     c(value)
// }).catch((err)=> console.log(err));


// Async await
