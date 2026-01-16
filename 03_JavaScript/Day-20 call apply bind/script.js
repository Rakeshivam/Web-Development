/**
 * ! call() method
 

const user1 = {
    username: "Sid",
    age: 24,
    state: "UP" 
}
const user2 = {
    username: "Abhay",
    age: 26,
    state: "Banglore" 
}

function details(city, country)
{
    console.log("this:",this); // window
    console.log("city:",city);
    console.log("country:",country);
}

details.call(user1,"Noida", "India");
*/


/**
 * ! apply(obj_ref , [n1, n2, n3......])

const user1 = {
    username: "Sid",
    age: 24,
    state: "UP" 
}

function details(city, country)
{
    console.log("this:",this); // window
     console.log("city:",city);
    console.log("country:",country);
 
}

details.apply(user1, ["Noida", "India"]);
 */


/**
 * ! bind(obj_ref, n1,n2,n3,n4,n5.........)
 */


const user1 = {
    userName: "Chombu",
    age: 28
}

function details(city, country)
{
    console.log("this:",this);
}

const x = details.bind(user1); 
x()



