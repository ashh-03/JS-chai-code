 const fruits=["apple", "mango","peach"];


// // FOR OF LOOP 
for(let fru of fruits){
    console.log(fru);
}


// // FOR IN LOOP

for(let fri in fruits){
    console.log(fruits[fri] ," ", fri);
}

//for in loop
const detail=
 [
    {name:"ashish",age:22},
    {name:"as",age:225},
    {name:"ash",age:522}];


    // for in loop_____________________

    for(let det in detail){
        console.log(det);
        //console.log(detail(det));
    }


    // for of loop__________________

    for(let det of detail){
        console.log(det.name , det.age);
        console.log(det);
        //console.log(detail(det));
    }

    function det(name){
        // console.log(name);
        console.log(name);
    }
    // const[{name},{age}]=detail
    const[{name}]=detail
    // console.log(name,age);
    console.log(name);
     det(detail);



    //  for each ________________

    
    // detail.forEach( func2=(names)=>{  
        // func2= is no need to write  
    //     console.log(names.name);
    // }
     // );
     detail.forEach((names)=>{
        console.log(names.name);
    }
        
    );



       let func2= detail.forEach((names)=>{
        // console.log(names.name);
        // return names.age;
    }
        
    );

    console.log(func2);

    // detail.forEach(name);

//     function ram(){
// console.log("hello");
//     }

//     ram();