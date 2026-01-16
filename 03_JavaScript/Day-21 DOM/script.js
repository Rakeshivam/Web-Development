/**
const body = document.body;

const h1 = document.getElementById("heading");

const paraChilds = document.getElementsByClassName("child"); // HTML Collection {}

console.log(paraChilds[2].textContent);
 */

/* Inline CSS
paraChilds[0].style.color = "blue";
paraChilds[1].style.color = "green";
paraChilds[2].style.color = "crimson";
*/

/**
* ! document.createElement()
* ! parentElement.appendChild()
const internal = document.createElement("style");   
internal.textContent = `.p1{
                                color: blue;
                            }
                            .p2{
                                color: green;
                            }
                            .p3{
                                color: crimson;
                            }`
const head = document.head;
head.appendChild(internal);
 */

/**
const paraTag = document.getElementsByTagName("p");
console.log(paraTag);

const span = document.querySelectorAll("span");
console.log(span);
 */

/**
 * ! HTML Collection vs NodeList
 */

const pCollection = document.getElementsByClassName("child"); // [1,2,3]
const pNodeList = document.querySelectorAll(".child"); // [1,2,3]

pNodeList[2].remove();


console.log("HTML Collection:", pCollection);  
console.log("Node List:", pNodeList);