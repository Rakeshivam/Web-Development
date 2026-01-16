/**
 * ! Example-1 
    a = 30;
    console.log("a:",a);


    var a = 10 ;
    console.log("a:",a);
*/

/**
 * ! Example-2

    a = 30;
    console.log("a:",a);


    let a = 10 ;
    console.log("a:",a);
 */

/**
 * ! Example-3

console.log("start");
let a = 10;
console.log(b);
{
  var b = 200;
}
console.log(a);
console.log(b);
console.log("end");

output:-
        start
        undefined
        10
        200
        end
 */

/**
 * ! Example-4
 * 
 * output:- 
 * start


console.log("start");
let a = 10;   // vp = memory create, value = 10

{ // vp start
        let a   // vp = memory create , value = ? value stored at line no 56
        console.log(a);  //! Referance error : can't access lexical         declaration "a" before initialization
        a = 10;
}

console.log(a);
console.log(b);
console.log("end");
 */

/**
 * ! Example-5

console.log("start");  // start
let a = 10;      // vp = memory create, ep = 10 (Initialize)

    { // Vp for block
              let  b        // vp = memory create
           console.log(b); // ! Referance error: can't access lexical declaration 'b' before initialization
            b = 30; // ! Referance error: can't access lexical declaration 'b' before initialization

          b;   // ep = memory = undefined
    }
console.log("end");
 */


/**
 * ! Example-6
 * 
 * output:-
 * start
 * 100
 * 20
 * 30
 * uncaught reference error: a is not defined
 
 console.log("start");
var b = 20;
const c = 30;
{
  let a = 100;
  console.log(a);  
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log("end");
*/


/**
 * ! Example-7
 */
console.log("start");
let a = 10;  // script a = 10
var b = 20;  // global b = 20/ 200
const c = 30; // script c = 30(locked)
{
  let a = 10;    // block a = 10
  console.log(a); // 10
  const c = 300;  // block c = 300
  console.log(b); // 20 from global
  b = 200;
  
  console.log(b); // 200 from global
}
console.log(a); // 10
console.log(b); // 200
console.log("end"); // end


/**
 * ! Example-8
 */

console.log("start");
var a = 10;
const c = 30;
{
  let a = 100;
      b = 200;  // Autoglobal
  const c = 300;
        d = 400; // Referance error: can't access lexical declarationg 'd' before initialization 
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}
let d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("end");



{
   // x = 100   
}

{
    // x = 200
}
{
  console.log(x); error
}

let x = 10;