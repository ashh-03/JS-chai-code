const person={
name:"ashish" , 
age:22,
hobbies:["paly" , "sing", "run"]

}

for(let key in person){

    console.log(`${key} : ${person[key]}`);

}






for(let key of Object.keys(person)){
    console.log(person[key]);
}

let my1="key1";
let my2="key2";

let obj1="val1";
let obj2="val2";

const obj3={

};

obj3[my1]=obj1;
obj3[my2]=obj2;

obj3.gender="male";

console.log(obj3);

