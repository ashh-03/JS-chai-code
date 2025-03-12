const detail=
 [
    {name:"ashish",age:22},
    {name:"as",age:225},
    {name:"ash",age:522}];

    // const news=detail.slice(0).sort((a,b)=>{
    //     return a.age-b.age;
    // })

    // const news=[...detail].sort((a,b)=>{
    //     return a.age-b.age;
    // })

    const news=[].concat(detail).sort((a,b)=>{
        return a.age-b.age;
    })


    console.log(news);