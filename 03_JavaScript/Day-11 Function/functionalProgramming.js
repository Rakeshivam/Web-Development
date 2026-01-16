/** 
*   ! Higher Order Function:-
    1. The function which accepts another function as an argument.
    2. The function which returns another function.

* ! Callback Function:-
    1. The function which is passed to another function.
    2. The function which is returned by another function.

*    ! Functional Programming:- Functional programming is a programming concept where we create a generic function which accepts another function and do any operations.
*/
/**
 * ! Case-1

// HOF
function calculator(a,task,b)
{
        console.log("Calculation start");
        const x = task(a,b);
        console.log("x:",x);
        console.log("Calculation End");
        return "Hello";
}


// Callback Function
const sum = (a,b) => a + b;

const y = calculator(10,sum,20);
console.log("y:",y);
 */


/**
const n1 = +prompt("Enter first number");
const task = prompt("Enter task +,-,*,**,/");
const n2 = +prompt("Enter second number");



switch (task) {
    case '+':
        calculator(n1,(m,n)=>m+n,n2)
        break;

    case '-':
        calculator(n1,(m,n)=>m-n,n2)
        break;
    case '*':
        calculator(n1,(m,n)=>m*n,n2)
        break;

    case '**':
        calculator(n1,(m,n)=>m**n,n2)
        break;

    case '/':
        calculator(n1,(m,n)=>m/n,n2)
        break;

    default:
        console.warn('Invalid Task');        
        break;
}
 */


/**
 * ! Case-2
 */

/**
const createOrder = () => {
    console.log("order id is generated");

    const proceedToPayment = ()=>{
                                    console.log("Payment Successfull")
                                };
            
   return proceedToPayment;
}

const result = createOrder();
console.log(result);
 */


/**
 * ! closure


const outer = () =>
{
    console.log("Inside Outer Function");
    const a = 10;

    const inner = () =>{
        console.log("Inside Inner Function..");
        console.log(a);
        return "Hello Dev";
    }

    return inner;
}
const res = outer()();
console.log("res:",res);
 */


const task = () =>
    {
        console.log("Task Executed...")
    }
    
    
task();


// write a function that takes a number and find it is prime or not?
// write a function that takes a number and find it is palindrome or not?
