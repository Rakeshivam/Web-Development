const button = document.querySelector(".btn");

button.addEventListener("dblclick", function handleClick(e){
    console.log("Event Object e:", e);
    const h1 = document.querySelector("h1");
    h1.style.color = "blue";
    h1.textContent = "Hello World..!"
} )

button.addEventListener("mouseenter",(e)=>{
    console.log("Event Object e:", e);
    const body = document.body;
    body.style.backgroundColor= "black";
    body.style.color = "white";
})

button.addEventListener("mouseleave",(e)=>{
    console.log("Event Object e:", e);
    const body = document.body;
    body.style.backgroundColor= "white";
    body.style.color = "black";
})