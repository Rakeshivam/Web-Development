// ways to create an object

const obj1 = { name:"Raj", age: 23};


// new keyword object inbuild constructor
const obj2 = new Object({username:"Raj", city:"Noida"});


// new keyword and contructor function

function CreateObject(name,age,city)   // this : {username:"Tinku",age: 24, city: "Rohini"}
{
        this.username = name;
        this.age = age;
        this.city = city;
}

const obj3 = new CreateObject("Tinku", 24, "Rohini");
console.log("obj3:",obj3);