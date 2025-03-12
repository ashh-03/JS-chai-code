console.log("script started");



// -----------------------------------keypress event


const body=document.body;

body.addEventListener("keypress",function(e){
    console.log(e.key);
})


const butt=document.querySelector("#three");

butt.addEventListener("mouseover", ()=>{
    console.log("mouseover occured");
})

butt.addEventListener("mouseleave", ()=>{
    console.log("mouseleave occured");
})


