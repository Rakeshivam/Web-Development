/** 
 * ! This keyword output in various places
 * 1. Global Execution Context:- Window
 * 2. Regular function:- window
 * 3. Object Regular method:- Object
 * 4. Constructor function:- Object
 * 5. Arrow function:- (lexical this):- window
 * 6. Object Arrow method:- (lexical this):- window
 * 7. Nested Method(outer is regular inner is Arrow):- this=object
 * 8. Event handler:- Element
 * 9. Class Method:- Class Instance
*/


// 1. Global Execution Context:- Window
console.log("GEC:",this);

// 2. Regular function:- window
function greet()
{
    // this = window
    console.log("Regular Function:",this);
}
greet()


// 3. Object Regular method:- Object
const obj1 = {
    name : "Tinku",
    age: 24,
    greet: function greet()
        {
            // this = obj
            console.log("Regular Method:",this);
        }   
}
obj1.greet()

// 4. Constructor function:- Object
function CreateObject(name, age, city)
{
    console.log("Constructor function:",this);
    this.username = name;
    this.age = age;
    this.city = city;
}

const u1 = new CreateObject("Dinga", 25, "Noida")

// 5. Arrow function:- (lexical this)
const sum = (a,b) =>{
    console.log("Arrow Function:",this);
}

sum(); // GEC  this: window

/* 6. Object Arrow method:- 


const obj2 = {
    name : "Tinku",
    age: 24,
    greet:() => {
            // this = obj
            console.log("Regular Arrow Method:",this);
        }     
}

// obj2.greet() // GEC  this = window


const obj3 = {
    username : "Chombu",
    sayHello : function (){
            console.log("Hello Developers!");
            console.log(this);
            obj2.greet();
    }
}

obj3.sayHello()
*/

/**
 * ! Nested Methods


const obj = {
    username : "Sid",
    isWorking : true,
    outer:function ()
    {
           console.log("Outer regular method:",this); // {username : sid}

           const inner = () =>{
                console.log("Inner Arrow Function", this); // {username : sid}
           }

           inner();
    }
}

obj.outer()
 */