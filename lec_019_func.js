function addTwo(num1 , num2){
    console.log(num1 + num2);
    
}

function addReturn(num1 , num2){
    return num1 + num2;
    
}

function UserReturn(username){
    if(username===undefined)
    // OR !username
        {
        console.log("Please enter a user name");
        return;
        
    }
    return `${username} is just logged in`;
    
}


function UserDefaultReturn(username ="sam"){
    // if(username===undefined)
    // OR !username
        // {
        // console.log("Please enter a user name");
        // return;
        
    // }
    return `${username} is just logged in`;
    
}

addTwo(4,5);
addTwo(4,"4");
console.log(addReturn(4,5));
console.log(UserReturn("ashish"));
console.log(UserReturn());
console.log(UserDefaultReturn());