const div = document.querySelector("div");

const handleClick = (e) =>{
    console.log("Clicked..")
    console.log("offsetX:",e.offsetX);
    console.log("offsetY:",e.offsetY);
    console.log("clientX:",e.clientX);
    console.log("clientY:",e.clientY);
    console.log("PageX:",e.pageX)
    console.log("PageY:",e.pageY)
    console.log("screenX:",e.screenX);
    console.log("screenY:",e.screenY);
}
window.addEventListener("click", handleClick);

window.removeEventListener(handleClick);

// custom events
const event = new Event();
// dispatchEvent()

/**
 * offsetX and offsetY = w.r.t element
 * clientX and clientY = w.r.t viewport (excluding tool bars and browsers top menu bar)
 * pageX and pageY = w.r.t website's own dimension
 * screenX and screenY = w.r.t screen (including vierport,tool bars and browsers top menu bar)
 */