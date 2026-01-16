/**
// Insertion, Updation, Deletion and searching in Object
const user = {
    username: "Tinku",
    state: "UP",
    delKey: "asdfghjk"
}

// Insertion
user.age = 24;
// Updation
user.state = "Delhi";
// Deletion
delete user.delKey;
// search a key is present or not
console.log("state" in user);
 */



/**
 * ! Object Methods


const user = {
    username: "Sid",
    age: 24,
    greet :function outer(){
                console.log("Outer this:",this);  // this = user{}

                const inner = ()=>{
                    console.log("Inner This:",this)  // this = user{}
                }
                inner();
        }
}

user.greet()


 const user = {
    username: "Sid",
    age: 24,
    greet :() => {
                console.log(user);  // this = window

                const inner = () => {
                    console.log(user)  // this = window
                }
                inner();
        }
}

user.greet();
 */

/**
 * ! Object Inbuild Methods
 * ! Object.keys()
 * ! Object.values()
 * ! Object.etnries()


const obj = {
    username:"Tinku",
    age: 24,
    city: "Noida"
}

const k = Object.keys(obj);
console.log("k:",k);


const v = Object.values(obj);
console.log("v:",v);
 */


// config driven ui or Dynamic Ui

// backend => Data{JSON Format} => Frontend => JS Object{key : value} => ui

/**
 * ! Object.entries() and Object.fromEntries()
const obj = {
    username:"Raj",
    age:24
}


const arr = Object.entries(obj);    // [ [username, raj], [age, 24] ]

const newObj = Object.fromEntries(arr);
console.log(newObj);
 */


/**
 * ! Object.assign()

const user = {
    username: "Chombu",
    age:21
}

const skill = {
    frontend: ["React", "Angular", "Next"],
    backend: ["Java", "Node", "Express", "Nest"],
    database : ["Sql", "Postgres", "MongoDB"],
}

const company = {
    comName: "Microsoft",
    address: "Hyderabad",
    age:25
}

const final = Object.assign({},user, skill, company );
console.log(final);
 */

/**
 * ! Object.freeze() :- No Insertion, No Deletion , No Updation
 * ! Object.isFroozen()
 
const user = {
    username: "Chombu",
    age:21
}

Object.freeze(user);
const x = Object.isFrozen(user);
console.log("x:",x);

// Insertion
user.city = "Noida";

// Updation
user.age = 25;

// Deletion
delete user.username

console.log(user)
*/

/**
 * ! Object.seal() :- No Insertion,No Deletion, only Udation Allowed

const user = {
    username: "Chombu",
    age:21
}

Object.seal(user);
console.log(Object.isSealed(user));
// Insertion
user.city = "Noida";

// Updation
user.age = 25;

// Deletion
delete user.username;

console.log(user);
 */

/**
 * ! Object.preventExtension() : but Updation and deletion are allowed
 * ! Object.isExtensible()


const user = {
    username: "Chombu",
    age:21
}

Object.preventExtensions(user);
console.log(Object.isExtensible(user));

// Insertion ❌
user.city = "Noida";

// Updation ✅
user.username = "Dinga";

// Deletion ✅
delete user.username;
console.log(user);
 */


/**
 * ! Object.hasOwn()
 * ! hasOwnProperty()

const user = {
    username: "Chombu",
    age:21
}

// const x = Object.hasOwn(user , "age");
// console.log("x:",x);


const y = user.hasOwnProperty("age");
console.log("y:",y);
*/

/**
 * ! Object.defineProperty( object_ref,"key_name",{ value: "noida", } )
 * 
 * {value: "noida",writable:false, enumerable:false, configurable:false}
 * ! writable :- Power of re edit
 * ! enumerable:- include or dis include for any operation
 * ! configurable:- to delete a key or not

const emp = {
    username : "Tinku",
}

Object.defineProperty(emp, "age",{
                value:23, 
                writable:true, 
                enumerable:true,
                configurable:true
            });

Object.defineProperty(emp, "city",{
                value:"Noida", 
                writable:false, 
                enumerable:false,
                configurable:false
});

Object.defineProperties(emp,{
    "age":{
        value:23,
        writable:false,
        enumerable:false,
        configurable:false
    },
    "city":{
        value:"Noida",
        writable:false,
        enumerable:false,
        configurable:false
    }
});

console.log(emp);
 */




/**
 * ! Inheritance:-
 *    1. Prototype Inheritance
 *    2. By using class and extends keyword
 * 
 * ! setPrototypeOf()
 * ! getPrototypeOf()

const animal = {
    name:"Sheru",
    eat:function(){
        console.log("Animal can eat");
    }
}

const dog = {
    name : "Dogesh Bhai",
    speak : function (){
        console.log("Bhoo Bhoo..!")
    },
    sleep:function (){
        console.log(`${this.name} can sleep..`)
    }    
}

// dog.__proto__ = animal;

Object.setPrototypeOf(dog, animal);
console.log(Object.getPrototypeOf(dog));
console.log(dog);
 */

/**
 * ! By Using Class and extends keyword


class Animal {
    constructor(name)
    {
        // (Animal) this = { name : "Tinku"} (Human)
        this.name = name;
    }

    eat(){
        console.log("Animal can eat")
    }
}


class Human extends Animal{
    constructor(name,age,city)
    {
        // this = { name : "Tinku"} , name = "Tinku"
        super(name);
        this.age = age;
        this.city = city;
    }

    code(){
        console.log("Human can code..")
    }
}


const h1 = new Human("Tinku", 23, "Noida");
console.log(h1);
 */


//  [] => 01x1 , {} => 02x2
// console.log([] === {});  false
// console.log([] == {});   false

const a = {};  // a = 01x1
const b = a;   // b = a = 01x1

// console.log(a == b); true
// console.log(a === b); true


const x = [10,20,30];
const y = [10,20,30];

// console.log(x.toString() === y.toString());  true
// console.log(x.toString() == y.toString()); true
// console.log(x === y); false
// console.log(x == y);   false


const m = { a:10};   
const n = { a:10};

console.log(m.toString() === n.toString()); 
console.log(m.toString() == n.toString());
// console.log(m === n);  false
// console.log(m == n);   false


console.log(m.toString(), typeof(m.toString()))





