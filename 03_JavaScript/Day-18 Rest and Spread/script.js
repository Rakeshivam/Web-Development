/**
 * ! Rest Operator in Object Destructuring
 
const obj = {
    username:"Tinku",
    age:24,
    address:{
        country:"India",
        state:"UP",
        pin:201301
    }
}

const {username , ...user} = obj;

console.log(username);
console.log(user);
*/

/**
 * ! Config Driven UI Array


// Config array with spread and rest operators
const uiComponents = [
  {
    id: 1,
    type: "button",
    label: "Submit",
    className: "btn-primary",
    events: {
      click: "handleSubmit",
    },
  },
  {
    id: 2,
    type: "input",
    placeholder: "Enter name",
    className: "form-input",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    id: 3,
    type: "select",
    options: ["Option 1", "Option 2", "Option 3"],
    className: "form-select",
  },
];


const [f1 , ...ui ] = uiComponents ;

console.log(f1)   // {id :1}
console.log(ui)   // [ {id: 2}, {id:3}]
 */

/**
 * ! rest operator inside function 
 
const total = (...arr) =>{
// arr = [10,20,30,40,50,60]
    const sum = arr.reduce((acc, element) =>{
                acc = acc + element;
        return acc;
    }, 0);

    return sum;
}
const result = total(10,20,30,40,50,60);
console.log("result:",result);
*/



/**
 * ! Example of rest and spread operator in function
 
const selectedItem1 = [
  {
    itemName: "Milk",
    price: 35,
    rating: 4.5
  },
 {
    itemName: "Coke",
    price: 40,
    rating: 4.1
  },
  {
    itemName: "Superyou Wafer",
    price: 52,
    rating: 4.2
  }
]

const selectedItem2 = [
  {
    itemName: "Cake",
    price: 615,
    rating: 4.2
  },
 {
    itemName: "Rajma Chawal",
    price: 160,
    rating: 4.1
  },
  {
    itemName: "Namkeen Lassi",
    price: 90,
    rating: 3.9
  }
]

const calculate = (...items) =>{
  const total = items.reduce((acc,element) =>{
      acc = acc + element.price;
      return acc;
    },0)

    return total;
} 

const x = calculate(...selectedItem1, ...selectedItem2);
console.log("x:",x);
*/


/**
 * ! Example of Spread Operator inside object


const user = {
  username: "Tinku",
  age: 22,
  isGraduated: true,
  address:{
    state: "UP"
  }
}

const employee = {
                    skill : "Fullstack Developer",
                    salary: "4LPA",
                    ...user
                  }

employee.username = "Sid";
employee.address.state = "Banglore";
console.log("user:",user);
console.log("employee:",employee);
 */





