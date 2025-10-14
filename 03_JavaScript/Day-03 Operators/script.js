/**
 * ! Logical Not !


let user = "       ";

if(!user.trim())
{
    console.log("Invalid User!")
}
 */



/**
 * ! Binary Operator
 * 1. Arithmetic Operator
 * +, -, *, /, %, **
 * 
 * 2. Assignment Operator (=)
 * 
 * 3. Compound Assignment Operator:- Arithmetic and Assignment


console.log("2 + 2 :",2 + 2);
console.log("20 - 2 :",20 - 2);
console.log("20 * 2 :",20 * 2);
console.log("20 / 2 :",20 / 2);
console.log("21 % 2 :",21 % 2);
console.log("5**2  :",5**2);


let a = "a"; // Ascii value conversion
let b = "a";

console.log(a < b);  // false
console.log(a > b);  // false
console.log(a <= b); // true
console.log(a >= b); // true
console.log(a == b); // true
console.log(a != b); // false
 */

/**
 * ! Logical AND Operator (&&)
 */

/**
 * !True:- Truthy
 * 1. -0.00000001
 * 2. +0.1
 * 3. " " (white space)
 * 4. "Chombu"
 * 5. 20
 * 6. []
 * 7. {} 
 * 
 * ! False:- Falsy
 * 1. 0
 * 2. 0n
 * 3. ""  (Empty String)
 * 4. undefined
 * 5. null
 * 6. Nan 
 * 7. 0.0


const a = prompt("Enter Fullname","Chombu");  // cancel = null
console.log("a:",a);
const b = "<h1>Hello World</h1>";

const x = a && b ;
document.write(x); 


const y = true && true;
const z = 20 && 30 ;
console.log("y:",y);
 


* ! Logical OR (||), Double Pipeline Operator
const email = prompt("Enter Email Id");  // cancel = null (falsy)," " truthy
const mobile = prompt("Enter Mobile Number"); 
// cancel = null (falsy), ok = "" (empty string=falsy)


if(email.trim() || mobile.trim())
{
    console.log("Logged In..!");
}
else{
    console.log("Please Provide valid email or mobile number");
}
*/

/**
 * ! Conditional Operator, Ternary Operator

* ! Example with expression
const a = +prompt("Enter first Number");  // 10
const b = +prompt("Enter second number"); // 20
const c = +prompt("Enter third number");


const bigTwo = a > b ? a : b;

// const bigThree = bigTwo > c ? bigTwo : c;
const bigThree =  (a > b ? a : b ) > c ? (a > b ? a : b) : c;
console.log("bigThreeNumber:",bigThree);


* ! Example with value
const user = prompt("Enter username"); 
// cancel = null (falsy)
// ok = "" emptystring
const header = document.querySelector("header");

header.innerHTML = user.trim() ? `Welcome ${user}` : "";
 */