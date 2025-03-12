// function returning function 
const arrt=()=>{

    const ans=()=>{
        console.log("ram")
    }

    return ans();

}

arrt();



const ans2=()=>{
    console.log("shyam")
}
const arrt1=()=>{
 return ans2();

}

arrt1();


// callback function


const ans1=(name)=>{
    console.log(name);
}

const ram=(fun)=>{

fun("hero");
}

ram(ans1);



