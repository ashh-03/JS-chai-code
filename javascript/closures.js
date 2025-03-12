// function roots(number , power){
//     return number**power;
// }

// const ans=roots(2,3);
// console.log(ans);

// or________________________________


function roots(power){
    return function(number){
        return number ** power;
    }
}

const square=roots(2);
const ans=square(3);
console.log(ans);

