console.log("scripted started");

const butt=document.querySelector(".project01 button");
const body=document.body;

const current=document.querySelector(".current_color")



function RandomColor(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
}

butt.addEventListener("click", function(){
    const randomcolor=RandomColor();
body.style.backgroundColor=randomcolor;

current.textContent=randomcolor;

})
