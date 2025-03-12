
// const numb=["pan","man","han"];

// function shaan(hero){

//     // return hero;
//     console.log(hero);
    
// }

// let fun2=numb.forEach(shaan);
// // console.log(fun2);


// // const ran=shaan();
// // console.log(ran);
// shaan();

// const detail=
//  [
//     {name:"ashish",age:22},
//     {name:"as",age:225},
//     {name:"ash",age:522}];

//     detail.forEach((names)=>{
//         console.log(names.name);
//     }
        
//     );



    //    let func2= detail.forEach((names)=>{
    //     console.log(names.name);
    //     // return names.age;
    // }
        
    // );

    // console.log(func2);
    // console.log(detail.forEach((names)=>{
    //     console.log(names.name);
    //     // return names.age;
    // }));

   
    
//     const obj1={
//         names:"ashish",
//         age:22,
//         abouts: function(){
//             console.log(this);
//             console.log(`${this.names} and ${this.age}`);
//         }
//         // abouts:function(){
//         //     console.log(`${this.names} and ${this.age}`);
//         // }
//     }
    
//    let func=obj1.abouts.bind(obj1)
//    func();
    

const usermethod={
    about:function(){
        return `${this.namer} is ${this.age}`;
    },
    is18:function(){
        return this.age>=18;
    }
}

function createuser(namer,age){
const user={};
user.namer=namer;
user.age=age;

user.about=usermethod.about;
user.is18=usermethod.is18;

return user;



}

const user1=createuser("ashish",22);

console.log(user1);

console.log(user1.about());

    