/* Empty Array
const arr1  = [];


// Array with Literals
const arr2 = [10,20,true,null,undefined,"Hello"];

// new keyword and Inbuild Array Constructor
const arr3 = new Array(5);

*/

/**
 * ! How to access an element
 * ! Array Terminology
 
// Array Elements = values = 10,20,30
// Array size = length = 3 = last index + 1
const arr = [10,20,30];
console.log(arr[3]);
*/

/**
 * ! push,pop, unshift,shift
const arr = [10,20];
arr.push(30,400);  // end me add
arr.pop(); // end se remove
arr.unshift(8,9); // starting me add

const frontend = ["DB","html","css","js"];
frontend.shift(); // starting se delete
 */

/**
 * ! splice

// arr.splice(1,0,20);
// arr.splice(3,0,40);


const arr1 = [ 10,50];
const x = arr1.splice(1,1);    [30]
arr1.splice(1,0,20,x[0],40);
console.log("arr1:",arr1);
console.log("x:",x);



const arr2 = ["java","tailwind","js","sql","react","spring"];
const skills = arr2.slice(1,5);

skills.splice(2,1);
console.log("skills:",skills);
*/

/**
 * ! reverse
 * ! indexOf(search value, starting index) => index number/ -1
 * ! includes(search value, starting index) => true/false


// const arr1 = [10,20,30,40,50];
// arr1.reverse();
// console.log(arr1);

const arr2 = ["php" ,"js" , "cpp" , "go" ,"java","python", "rust" ];

const y = arr2.includes("php" , 1);
console.log("y:",y);

// const x = arr2.indexOf("js" ,2);
// console.log("x:",x);
 */

/**
 *! sort(callback) = HOF

const num = [ 2,4,10,7,8,5,3,6,1,9] ;

num.sort((a,b) => b - a )         

console.log(num);
 */

/*
function (a,b)
{
    // return a - b; Ascending Order
    return b - a;   // Descending Order
}


(a,b) => a - b;   -ve  no swap
         a - b;   + ve  swap
         a - b;    0   no swap

(a,b) => b - a;   -ve  no swap
         b - a;   + ve  swap
         b - a;    0   no swap
*/

/**
 * ! forEach(callback) = HOF

const arr = [1,2,3,4,5];

const x = arr.forEach(function(element , index, array){
    array[index] = element * 10 ;
    return "Hello";
});
    
console.log("arr:",arr);
console.log("x:",x);
 */

/**
 * ! map(callback) => HOF
 * It returns modified array


const arr = [10,20,30,40,50];

const x = arr.map(function(element)
                    {
                        if(element < 40)
                        {
                            return element
                        }
                                              
                    })

console.log("x:",x);
*/
// function map()
// {
//     return [true, 20, 30, undefined, undefined]
// }

/**
 * ! filter(callback)


// const y = arr.filter((element) => element <= 30);

const arr = [10,20,30,40,50];
                            
const y = arr.filter((element) =>{
                            if(element <=30)
                            {
                                return true;
                            }
                           
                    })  // [10,20,30]
                    .map((val) => val * 10); 
                    
                    // map = [100,200, 300 ]
                      
console.log("y:",y);
 */

/**
 * ! reduce(callback , initial value of accumulator)
 * accumulator = total = addition = sum 


const arr = [10,20,30,40,50];

const total = arr.reduce(function(acc,element)
                        {
                                    acc = acc + element;
                                    return acc;
                        },0);

console.log("total:",total);
 */

/**
 * ! Example
 

const cart =[
    {
        product:'iphone-17 pro',
        price:135000
    },
    {
        product: 'Apple airpods pro',
        price:25900
    },
    {
        product: 'mac book',
        price:239990
    },
    {
        product: 'Apple 20w charger',
        price:2190
    }
];

// cart = [ {}, {}, {}, {}]

const total = cart.reduce(function (acc, element){
    acc = acc + element.price;
    return acc;
},0);

console.log("total:",total);
*/

/**
 * ! Example of Filter
 *
const cart = [
  {
    item: "maggie",
    category: "noodles",
    price: 40,
  },
  {
    item: "Coke Diet",
    category: "colddrink",
    price: 40,
  },
  {
    item: "Cadbury silk",
    category: "chocolate",
    price: 110,
  },
  {
    item: "Chigs Noodles",
    category: "noodles",
    price: 80,
  },
  {
    item: "Amul Tuffles",
    category: "Chocolate",
    price: 240,
  },
  {
    item: "Campa",
    category: "colddrink",
    price: 10,
  },
];

// cart = [ {}, {}, {}, {} ,{category: "Cholocate"}, {} ]

const result = cart.filter(element => element.price <= 200 );
console.log("result:", result);
*/

/**
 * ! Example of Reduce Methods
 

// step:-1 figureout less than 40 (filter method) [10,20,30,40,50] => [10,20,30]
// step:-2 Transform figuredout values into multiple of 10 (map)  
// [10,20,30] => [100,200,300]

const arr = [10,20,30,40,50];

const x = arr.reduce((acc, element)=>{
    if(element < 40)
    {
        acc.push(element * 10)
    }
    return acc;
} , []);

console.log("x:",x);
*/

/**
 * ! reduceRight(callback)
 * ! some(callback) => at least 1 item is present
 * ! every(callback) => every items fullfill same condition


const cart = [
  {
    item: "powerbank",
    category: "Electronics",
    price: 20000,
  },
  {
    item:"AirPods",
    category:"Electronics",
    price:19990
  },
  {
      item:"Apple Charger",
      category:"Electronics",
      price:2190
  },
 {
    item: "Apple Smart Watch",
    category: "Electronics",
    price: 30000,
 }
];


const res1 = cart.some((element,i) => {
    console.log("i:",i);
    if(element.category.toLowerCase() === "cake")
    {
        return true;
    }
    // undefined
});


const res2 = cart.every(element =>{
    if(element.category.toLowerCase() === "electronics")
    {
        return true
    }
})
console.log("res2:",res2);
 */

/**
 * ! find(callback)
 * ! findLast(callback)


const cart = [
  {
    item: "Powerbank",
    category: "Electronics",
    price: 20000,
  },
  {
      item:"AirPods",
      category:"Electronics",
      price:19990
  },
  {
      item:"Apple Charger",
      category:"Electronics",
      price:2190
  },
  {
      item: "Apple Smart Watch",
      category: "Electronics",
      price: 30000,
  },
  {
      item: "AirTag",
      category: "Electronics",
      price: 2000,
  }
];


const filteredItem = cart.filter(element =>
                        {
                            if(element.price < 2500)
                            {
                                return true;
                            }
                        });
const findItem = cart.filter(element =>
                        {
                            if(element.price < 2500)
                            {
                                return true;
                            }
                        });

console.log("filteredItem:",filteredItem);
console.log("findItem:",findItem);
// find = single first occurence element which fullfill the condition
 */

/**
 * ! Array Constructor:- Array()
 * ! fill()
 

const arr = new Array(5);
// const arr = [___, ____, ___, ___, ___]

const x = arr.fill("").map((element,index) =>{
    element =  +element + index + 1;
    return element;
})

// arr = ["" , "", "", "", "", ""];
console.log("x:",x);
*/

/**
 * ! Array.isArray()


const x = Array.isArray(0);
const y = Array.isArray({});
const z = Array.isArray([]);

console.log("x:",x);
console.log("y:",y);
console.log("z:",z);
 */

/**
 * ! Array.from()
 

const obj = {name :"chombu", age: 22};
const res1 = Array.from(obj);

const str = "Hello";
const res2 = Array.from(str);
console.log("res1:",res1);
console.log("res2:",res2);
*/

/**
 * ! fill(value , start, end+1)


const arr = new Array(5)
// arr = [___, ___, ___, ___, ___] => [,1,2,3,0]
//       [ ud, ud, ud, ud, ud]


const x = arr.fill().map((element,index,array) => {
            if(index === 0 || index === array.length - 1){
                return element;
            }  
            else{
                    return index;
            }            
});

// map = [ud, 1, 2,3, ud ]

console.log("x:",x);
 */

/**
 * ! flat(): - flat method removes empty slots
 *  1,2,3, Infinity

const arr1 = [1, [2,[3,4,[5,6,[7,[8,[9,[10,[11]]]]]]]]];  

const x = arr1.flat(Infinity);
console.log("x:",x);

const arr2 = [10,  ,[20,30],40];

const y = arr2.flat();
console.log("y:",y);
 */

/**
 * ! join("")
const arr1 = ["Js" , "is", "most", "loved", "language"];
const s1= arr1.join(" ");
console.log("s1:",s1);


const arr2 = ["Harsh" , "Singh", "Patel"];
// Harsh Singh Patel

const r = arr2.join(" ");
console.log("r:",r);
 */

/**
 * ! reduceRight(callback, initial value)


const arr = [10,20,30,40,50];

const total = arr.reduceRight((acc, element) =>{
                                console.log("element:",element);
                                acc = acc + element;
                                console.log("acc:",acc);
                                return acc;
                        },0);

console.log("total:",total);
 */

const arr = ["React", "is", "awsome"];

const z = arr.join(" ");

console.log("z:", z);
