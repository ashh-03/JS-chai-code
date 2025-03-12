function createuser(fname,age){
    // const user=Object.create(createuser.prototype);
    this.name=fname;
    this.age=age;

    // written below is optional
    // return this;
}

// console.log(hello());


const user1= new createuser("ashish" , 22);

createuser.prototype.sing=function(){

    // return`${this.name} is ${this.age}`;
    // console.log("hurray");
    return"hurray";
};

createuser.prototype.about=function(){

    return`${this.name} is ${this.age}`;
    // console.log("hurray");
};

// console.log(user1);

console.log(user1.sing());
console.log(user1.about());