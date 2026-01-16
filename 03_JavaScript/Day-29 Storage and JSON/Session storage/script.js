const obj1 = {
    fullname: "Sidharth singh",
    email:"sid@gmail.com",
    password:"Sid123"
}
const obj2 = {
    fullname: "Sidharth singh",
    email:"sid@gmail.com",
    password:"Sid123"
}
const obj3 = {
    fullname: "Sidharth singh",
    email:"sid@gmail.com",
    password:"Sid123"
}



sessionStorage.setItem("user1", JSON.stringify(obj1,null,4) );
sessionStorage.setItem("user2", JSON.stringify(obj2,null,4) );
sessionStorage.setItem("user3", JSON.stringify(obj3,null,4) );