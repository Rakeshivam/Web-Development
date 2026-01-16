// Arrow Function  => (ES6 Feature)

/* Explicit Return Type Arrow Function
const sum = (a,b) => {
    const total = a + b;
    console.log(total);

    return total;
};*/ 

/* Implicit Return Type Arrow Function


console.log("start");
const sum = (a,b) => a + b;
const calculator = (m,n) => sum(m,n);
const x = calculator(10,20);
console.log("x:",x);
console.log("End");
*/


// const sum = (a,b) => a + b;
// ! Explicit Return Type Arrow Function
const sum = (a,b) => {
                    const temp = a+b;
                    console.log(temp);
                    return temp;
                }
    

const x = sum(10,20);
console.log("x:",x);







