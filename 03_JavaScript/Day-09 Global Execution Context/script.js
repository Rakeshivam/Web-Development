console.log("Start");
var a = 1;
let b = 2;
const c = 3;

    {
        var a = 10;
        let b = 20;
        const c = 30;
        var d = 40;
        console.log("Inside a Block");
        console.log("a:",a);
        console.log("b:",b);
        console.log("c:",c);
        console.log("d:",d);
    }
console.log("a:",a);
console.log("b:",b);
console.log("c:",c);
console.log("d:",d);
console.log("End");