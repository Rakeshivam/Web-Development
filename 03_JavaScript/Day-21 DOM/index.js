/**
 * ! document.createElement("")
 * ! appendChild()
 * ! append()
 

const heading = document.createElement("h1");  // <h1></h1>  => { textContent : ""}
heading.textContent = "Hello Developers!!";

// Parent Element
const body = document.body;
body.appendChild(heading);


const p1 =  document.createElement("p");  // <p></p>  => {textContent : ""}
const p2 =  document.createElement("p");  // <p></p>  => {textContent : ""}

p1.textContent = "Child-2";
p2.textContent = "Child-3";

// const parent = document.getElementsByClassName("parent")[0];  
// HTML Collection { 0: <div class="parent"></div>}

const parent = document.querySelector(".parent");
parent.append(p1,p2, "Abra ka dabra");
*/


/**
 * ! insertAdjacentElement(position, element)
 * 
 * position:-  "beforebegin", "afterend", "afterbegin", "afterend"


const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

p1.textContent = "Child-2";
p2.textContent = "Child-4";
p3.textContent = "Child-6";

const midP = document.querySelector(".parent .mid");

midP.insertAdjacentElement("beforebegin",p1);
midP.insertAdjacentElement( "afterend", p2);

const lastP = document.querySelector(".parent :last-child");
lastP.insertAdjacentElement("beforebegin", p3)
 */


/**
 * ! insertAdjacentElement(position,element)
 * position = "afterbegin" , "beforeend"
 */

const p1 = document.createElement("p");
const p3 = document.createElement("p");

p1.textContent = "Child-1";
p3.textContent = "Child-3";

const div = document.querySelector("#parent");

div.insertAdjacentElement("afterbegin",p1);
div.insertAdjacentElement("beforeend",p3);