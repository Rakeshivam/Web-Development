/** Primitive Literals
const a = 10;
let b = a;   

    b = 20;


console.log("a:",a);  10
console.log("b:",b);  20
 */




/**
 * ! Non Primitive Literal
 * ! Shallow Copy
 

const obj1 = {
    name : "Tinku",
    age: 21
}


const obj2 = obj1;

obj2.name = "Chombu";

console.log("obj1:",obj1);
console.log("obj2:",obj2);
*/


/**
 * ! Deep Copy
 */

const jack = {
    cake: "Chocolate cake"
}

const oggy = structuredClone(jack);


jack.bike = "David Putra";

console.log("Jack:",jack);
console.log("oggy:",oggy);