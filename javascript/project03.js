console.log("script start");

const head1=document.querySelector(".heading1");
const head2=document.querySelector(".heading2");
const head3=document.querySelector(".heading3");
const head4=document.querySelector(".heading4");

function rice(element,text,color,time){
return new Promise((resolve,reject)=>{

    setTimeout(()=>{

        if(element){
            element.textContent=text;
            element.style.color=color;
            resolve();
        }

        else{
            // reject("not found");
            reject();
        }
        
    }, time);
})

}


rice(head1,"one","red",1000).then(()=>{
    return rice(head2,"two","green",2000);
}).then(()=>{
    return rice(head3,"three","voilet",2000);
}).then(()=>{
    return rice(head4,"four","orange",2000);
}).then(()=>{
    console.log("completed")
}).catch((reject)=>{
    reject("not found");
    // console.log(reject);
})





