const user1 = {
    fullname:"Chombu Singh",
    email: "chombu@gmail.com",
    password: "chombu123"
}

// console.log(user1.toString())   [ object Object]
const jsonData = JSON.stringify(user1,null,4);



localStorage.setItem("data", jsonData);
localStorage.setItem("theme","light");