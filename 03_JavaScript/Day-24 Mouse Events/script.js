const clickButton = document.querySelector(".btn1"); 
const doubleClickButton = document.querySelector(".btn2"); 
const rightClickButton = document.querySelector(".btn3"); 
const hoverButton = document.querySelector(".btn4");

const handleClick = (e) => {
    console.log("Clicked...");
    console.log("offsetX:",e.offsetX);
    console.log("offsetY:",e.offsetY);

    const h1 = document.querySelector("h1");
    h1.textContent = "Namaste Developer..";
}

const handleDoubleClick = () =>{
    console.log("Double Clicked...");
     const h1 = document.querySelector("h1");
     h1.style.color = "blue";
}

const handleRightClick = (e) =>{
    e.preventDefault();
    console.log("Right Clicked...");
    const h1 = document.querySelector("h1");
    h1.style.color = "crimson";
}

const handleEnter = ()=>{
    const body = document.body;
    body.style.cssText = `background-color:black;
                        color:white`;
}

const handleLeave = () => {
    const body = document.body;
    body.style.cssText = `background-color: #fff; color:black;`
}

// How to set event handler/ event listener
clickButton.addEventListener("click",handleClick);
doubleClickButton.addEventListener("dblclick",handleDoubleClick);
rightClickButton.addEventListener("contextmenu",handleRightClick);

// hoverButton.addEventListener("mouseenter", handleEnter);
// hoverButton.addEventListener("mouseleave", handleLeave);

// hoverButton.addEventListener("mouseover",handleEnter);
// hoverButton.addEventListener("mouseout", handleLeave);

// window.addEventListener("mousemove", (e) => {
//         console.log("Mouse Move..!");
//         console.log("e:",e);
// })
