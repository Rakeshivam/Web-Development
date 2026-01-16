// Button Reference
const button = document.querySelector(".btn");

// Set Event Listener
button.onclick = handleClick;
button.ondblclick = handleDoubleClick;

function handleClick()
{
    debugger;
    const heading = document.querySelector("h1");
    heading.textContent = "Hello World..!";
    heading.style.color="crimson";
}

function handleDoubleClick() {
    const heading = document.querySelector("h1");
    heading.textContent = "Namaste Developers..!";
    heading.style.color="blue";
}