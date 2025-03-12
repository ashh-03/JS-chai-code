const per={
    name:"ashish",
    age:22
}

const detail=({name,age})=>{
    console.log(name);
    console.log(age);
}

detail(per);

// funstion inside function 

const func1=(names)=>{
    const func2=(names)=>{
        console.log(names);
    }
    func2(names);
}
func1("ram")