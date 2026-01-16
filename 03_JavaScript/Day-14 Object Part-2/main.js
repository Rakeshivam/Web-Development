/**
 * ! __proto__
 * ! setPrototypeOf()
 * ! getPrototypeOf()
 * ! New Way:- Object.create()
 */


const human = {
        hunt: function (){
            console.log("Can Hunt")
        }
}

const user = Object.create(human,{
    "name" :{
        value:"Tinku",
        writable:false,
        enumerable:false,
        configurable:false
    },
    "age":{
        value:21,
        writable:false,
        enumerable:false,
        configurable:false
    }
});    

console.log(user);
