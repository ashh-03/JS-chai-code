
// const detail={

// }


// PROTOTYPE__________________________________

// function createuser(fname,age){
//     const user=Object.create(createuser.prototype);
//     user.name=fname;
//     user.age=age;
//     return user;
// }

// // console.log(hello());


// const user1=createuser("ashish",22);

// createuser.prototype.sing=function(){

//     return`${this.name} is ${this.age}`;
// };

// console.log(user1.sing());






function createuser(fname,age){
    const user=Object.create(createuser.prototype);
    // user.name=fname;
    // user.age=age;
    return user;
}

// console.log(hello());


const user1=createuser();

createuser.prototype.sing=function(){

    // return`${this.name} is ${this.age}`;
    console.log("hurray");
};

console.log(user1.sing());