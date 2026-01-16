/**
 * ! Intro to Object
const obj = {
    username: "Aman",
    age: 24,
    city: "Noida",
    sum: (m,n) => m +n,
    isLogin: false
};


key = username, age, city
value = "Aman", 24, "Noida"
 */

/**
 * ! Example-1
const emp = {
    empName: "Chombu",
    post: "Backend Developer",
    skills:  [10,20,30],
    isLogin: false,
    salary: 25000,
    greet: function (){ return "Hello Everyone"} ,
    personalInfo: {
        maritalStatus: 'unmarried',
        city: "Noida",
        nickname: "chomu"
    }
}

console.log("Username:",emp.empName);
console.log("Post:", emp.post);
console.log("Skills:", emp.skills);
console.log("Login Status:", emp.isLogin);
console.log("Salary:",emp.salary);
console.log("greet:", emp.greet());
console.log("Marital Status:", emp.personalInfo.maritalStatus);
*/


/**
 * ! Example-2

const obj1 = {
    user:"Tanmay",
    age:25,
    city:"Rohini",
    'personal info': { marital: 'unmarried'}
};

const obj2 = {
    4 : "Dinga",
    2 : "Simba",
    0 : "Chombu",
    1 : "Tinku",
    3 : "Gian"
}

// console.log(obj1.'personal info');

console.log(obj1['user']);
console.log(obj1['age']);
console.log(obj1["city"]);
console.log(obj1["personal info"].marital);
console.log(obj1["personal info"]["marital"]);
 */

/**
 * ! Example-3
 
const obj1 = {
    username: "chombu",
}

const obj2 = {
    age: 23,
    city: "Noida"
}

obj1.child = obj2;
*/


/**
 * ! Example-4 User Defined Key name
const key1 = prompt("Enter key1");  // key1 = "fullname"
const key2 = prompt("Enter key2");  // key2 = "age"


const obj = {
    [key1] : "Chombu",
    [key2] : "Noida"
};

console.log("obj:", obj);
 */


/**
 * ! Example-5 keyname and value are same

const user = "Chombu";
const age = 23;

const obj = {
    // user: chombu,
    // age: 23
    user,
    age
}

console.log(obj);
 */
