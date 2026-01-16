/**
 * 1. what is DOM and DOM Api?
 * 2. what is event listeners and event object?
 * 3. what are the different types of event?
 *   ans:-  mouse,form, keyboard, cut,copy,paste,online,offline, touch, cliboard, media, animation
 * 
 * 4. difference between html collection and nodelist?
 * 5. what is event propagation and phase of event?
 * 6. difference between stopPropagation and stopImmediatePropagation?
 * 7. what is event delegation?
 * 8. what is addEventListener, removeEventListener, dispatchEvent?
 * 9. how to create custom events?
 */
/**
 * ! Without event delegation example-1
 
const card1 = document.querySelector(".c1");
const card2 = document.querySelector(".c2");
const card3 = document.querySelector(".c3");
const card4 = document.querySelector(".c4");

const handleClick = (e)=>{
     console.log(e.target)   
}
card1.addEventListener("click",handleClick);
card2.addEventListener("click",handleClick);
card3.addEventListener("click",handleClick);
card4.addEventListener("click",handleClick);
*/

/**
 * ! without event delegation example-2

// const cards = document.querySelectorAll(".card");
const cards = Array.from(document.getElementsByClassName("card"));
console.log(cards);

 const handleClick = (e)=>{
        console.log(e.target)   
    }

cards.map(element=>{
    element.addEventListener("click", handleClick);
})
 */

const cardContainer = document.querySelector(".cardContainer");

const handleClick = (e)=>{
    e.stopImmediatePropagation()    
    console.log(e.target);
}

cardContainer.addEventListener("click",handleClick,true);