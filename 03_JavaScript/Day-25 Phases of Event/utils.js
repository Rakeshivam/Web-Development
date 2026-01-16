/**
export const handleGrandParent1 = (e) => {
    console.log("Grand Parent Capturing Clicked..!")
}

export const handleGrandParent2 = (e) => {
    console.log("Grand Parent Bubbling Clicked..!")
}

export const handleParent1 = (e) => {
    console.log("Parent Capturing Clicked..!")
}

export const handleParent2 = (e) => {
    console.log("Parent Bubbling Clicked..!")
}

export const handleChild1 = (e) => {
    console.log("Child Capturing Clicked..!")
}

export const handleChild2 = (e) => {
    console.log("Child Bubbling Clicked..!")
}

 */


export const handleGrandParent1 = (e) => {
    console.log("Grand Parent Clicked..!",e)
}

export const handleParent1 = (e) => {
    console.log("Parent  Clicked..!",e);
}

export const handleChild1 = (e) => {
    e.stopImmediatePropagation();
    // e.stopPropagation()
    console.log("Child Clicked first time!",e)
}

export const handleChild2 = (e) => {
    console.log("Child Clicked second time!",e)
}


