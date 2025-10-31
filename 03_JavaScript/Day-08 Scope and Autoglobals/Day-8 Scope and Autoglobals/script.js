/**
 * ! Example-1 Autoglobals
 
console.log("start");
var a = 1;  // Global Scope
let b = 2;  // Script scope
const c = 3; // script scope
{
    var a = 10;  // global scope
        b = 20;  // script scope
    const c = 30;  // block scope
          d = 40;  // global scope (autoglobal)
    console.log("Inside a block");
    console.log("a:",a);  // 10
    console.log("b:",b);  // 20
    console.log("c:",c);  // 30
    console.log("d:",d);  // 40
}

console.log("Outside a block");
console.log("a:",a);  // 10
console.log("b:",b);  // 20
console.log("c:",c);  // 3
console.log("d:",d);  // 40
console.log("end");
*/
/**
 * ! Example-2

console.log("start");
var a = 1;  
let b = 2;  
const c = 3; 
{
    var a = 10;  
        b = 20;  
        e = 30;  // Initialization statement
        d = 40;  
    console.log("Inside a block");
    console.log("a:",a);  
    console.log("b:",b);  
    console.log("c:",c);  
    console.log("d:",d);  
}

var e;  // Declaration statement
console.log("Outside a block");
console.log("a:",a);  
console.log("b:",b);  
console.log("c:",c);  
console.log("d:",d);  
console.log("end");
 */


/**
 * ! Ternary Operator
 */

const h1 = document.querySelector("h1");  // DOM

const user = prompt("Enter username"); // user = "Rishabh", user = null

h1.innerHTML = user? `Welcome ${user}` : "Invalid User";