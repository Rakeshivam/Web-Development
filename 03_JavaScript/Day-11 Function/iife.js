// ! Immediately Invoked Function Expression (IIFE) :- ()()
// The greet function is not stored anywhere 
// It exists temporarily in the Call Stack during execution, then is removed once it completes.
// It runs only once when js file is load.
// ! IIFE = anonymous function

console.log("start");

(function () {
  console.log("Good Morning..");
})();

console.log("End");


