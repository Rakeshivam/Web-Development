import {handleGrandParent1,handleParent1,handleChild1,handleChild2} from "./utils.js";

const grandParent = document.getElementById("grand-parent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");


grandParent.addEventListener("click",handleGrandParent1, false);  
parent.addEventListener("click",handleParent1, false);           
child.addEventListener("click",handleChild1, false);
child.addEventListener("click",handleChild2, false);

















/* Capturing Phase
grandParent.addEventListener("click",handleGrandParent1, true);  // 1
parent.addEventListener("click",handleParent1, true);            // 2
child.addEventListener("click",handleChild1, true);              // 3

Bubbline Phase
grandParent.addEventListener("click",handleGrandParent2, false);  // 6
parent.addEventListener("click",handleParent2, false);            // 5
child.addEventListener("click",handleChild2, false);              // 4
*/