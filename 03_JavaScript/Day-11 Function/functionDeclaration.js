/**
 * ! 1. Function is an Object.
 * ! 2. A block of code which is used to perform some specific task.
 * ! 3. A function get executed only when it is called.
 * ! 4. To call a function we need function reference and paranthesis.
 * ! 5. The values passed during function call is known as arguments.
 * ! 6. The values accepted in the function definition is known as parameters.
 * ! 7. Variable declared with var, let and const inside a function is local scoped.
 */

/**
 * ! Example of Function
 * 
    function sum(a,b)
    {
        const total = a + b; 
        console.log(`Sum of ${a} and ${b} : ${total}`);
        return total;       
    }

let x = sum(10,20);
console.log("x:",x);


console.log("Start");
function findPower(a,b)
{
    const pow = a**b;
    console.log(`${a} ^ ${b} : ${pow}`); 
}

const y = findPower(5,3);
console.log("y:",y);
console.log("End");
 */


function child(){
    console.log("Inside Child Function");
    return "Hello Dev..!"
}

function parent()
{
    console.log("Inside Parent Function");
    const response = child();
    return response;
}

const z = parent();
console.log("z:",z);

/**
 * ! Types of Function:- 6
 *   1. Function Declaration Statement/ Function Statement
 *   2. Function as Expression/ Expression Function/ First Class Function
 *   3. Immediately Invoked Function Expression (IIFE)
 *   4. Arrow Function (=>) [Introduced in ES6]
 *   5. Higher Order Function (HOF)
 *   6. Callback Function (CBF)
 */