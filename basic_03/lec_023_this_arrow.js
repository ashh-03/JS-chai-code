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