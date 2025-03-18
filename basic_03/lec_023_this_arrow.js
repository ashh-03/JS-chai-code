const user={
    username:"ashish",
    price:999,
    welcomeMsg:function(){

        // this keyword is used to refer current context of the object
        console.log(`welcome ${this.username}`);
        
    }
}

user.welcomeMsg();
user.username="sam";
user.welcomeMsg();


const chai= (num1 , num2) => {

return num1+num2;    // this called explicit return
    
}

// const chai= (num1 , num2) => num1+num2 or const chai= (num1 , num2) => (num1+num2)   this is called implicit return
// this is use when you have only return content inside , then is also right way to describe
    

chai(2,3);