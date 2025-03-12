console.log("Script is running");
let boxes=document.getElementsByClassName("box");
//let boxes=document.querySelector(".container").children;
//let boxes=document.querySelectorAll(".box");

function getRandom(){
    //if you want random number between two number then use use this--a+r*b--and Math.ceil for integer
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val3},${val2})`;
}

// let arr=Array.from(boxes).forEach(e=>{

//     e.style.backgroundColor=getRandom();
//     e.style.color=getRandom();
// })

let arr=Array.from(boxes);

let i;
for(i=0;i<5;i++){
    arr[i].style.backgroundColor=getRandom();
}