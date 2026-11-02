// DOM
// console.log(document);

// let h1EL=document.getElementById("heading")
// let h1EL = document.getElmentByClassName("heading");
let h1EL=document.querySelector("#heading")

// h1EL.style.color="red"
// // h1EL.style.backgroundColor="blue"

// // chane the text content
// h1EL.textContent="hello World"

// // Insert element
// h1EL.innerHTML +="<h2>Welcome</h2>"


// console.log(h1EL);


// let btnEL=document.querySelector("#btn");

// let fun=()=>{
//     h1EL.style.color="blue";
// }
// let fun2=()=>{
//     h1EL.style.color="black";
// }
// btnEL.addEventListener("click",fun);
// btnEL.addEventListener("dblclick",fun2)



//  to change the box color using mouseenter
// boxEl=document.querySelector(".box");
// let fun=()=>{
//     boxEl.style.backgroundColor="red";
// }
// boxEl.addEventListener("mouseenter",fun);


//  to change random color
 boxEl = document.querySelector(".box");

let fun = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    boxEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

boxEl.addEventListener("mouseenter", fun);