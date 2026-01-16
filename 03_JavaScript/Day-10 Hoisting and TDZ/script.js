/**
 * ! Example-1
var a    // vp =  memory, undefined (❌TDZ)
console.log(a); // undefined

    a = 10;  // Variable declaration



// ! Referance error: can't access lexical declaration 'b' before initialization (✅TDZ).
 */

/**
 * ! Example-2


console.log("a:",a);
console.log("b:",b);
console.log("c:",c);

var a = 10;
let b = 20;
const c = 30;
 */


const x = [1,2,3] + [4,5,6];
console.log(x);
console.log(typeof(x));
