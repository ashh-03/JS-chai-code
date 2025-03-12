// map method

const detail=
 [
    {name:"ashish",age:22},
    {name:"as",age:225},
    {name:"ash",age:522}];

    function users(user){
        return user.name;
    }

    // const users=function(user){
    //     return user.name;
    // }
    

    const viewer=detail.map(users);
    console.log(viewer);



    console.log(detail.map(users));

    // or___________

    const view=detail.map(user=>{
        return user.name;
    })

    console.log(view);




    // filter method

    const numbers=[1,2,3,4,5];

    const vi=numbers.filter(number=>{
        return number%2===0 ;
    })

    console.log(vi);


    // reduce method

const vii=numbers.reduce((accumulator,currentValue)=>{
        return accumulator+currentValue;
    })

    console.log(vii);