const about=function(){
    console.log(`${this.names} and ${this.age}`);
}

const obj1={
    names:"ashish",
    age:22,
    abouts:about
    // abouts:function(){
    //     console.log(`${this.names} and ${this.age}`);
    // }
}

obj1.abouts();


// CALL 

// 1________________________________
const obj0={
    names:"ashiaffh",
    age:2002,
    
    abouts:function(){
        console.log(`${this.names} and ${this.age}`);
    }
}

const obj3={
    names:"asff",
    age:2522}

obj0.abouts();
obj0.abouts.call(obj3);



// 2___________________________________


const about1=function(){
    console.log(`${this.names} and ${this.age}`);
}

const about3=function(actor, singer){
    console.log(`${this.names} and ${this.age} , ${actor} , ${singer}`);
}

const obj2={
    names:"as",
    age:222}

    
    

    about1.call(obj2);
    about1.call(obj3);
    about3.call(obj3,"arjun","jaan");



    // APPLY_________________________

    
    
    const obj4={
        names:"ayyys",
        age:200922}
    
about3.apply(obj4,["arjun","jaan"]);

// bind______________________

const func=about3.bind(obj3,"arjun","jaan");
func();