console.log("script started");

const butt=document.querySelectorAll(".my button");

for(let btt of butt){
    btt.addEventListener("click", function(){
        btt.style.backgroundColor="red";
        btt.style.color="yellow";
    })
}