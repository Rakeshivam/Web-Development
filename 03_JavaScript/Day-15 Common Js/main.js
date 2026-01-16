const obj = require("./sum.js");
const product = require("./product.js");
const power = require("./power.js");

// Object Destructuring
const {sum,totalAmount} = obj;
const cart = [
    {
        item:"Noise Buds",
        price:1399
    },
    {
        item:"Smart Watch",
        price:3999
    }
]

console.log(sum(10,20));
console.log(totalAmount(cart));


/* obj = {
            sum: ()=>{} ,
            totalAmount: ()=>{} 
        }
*/

