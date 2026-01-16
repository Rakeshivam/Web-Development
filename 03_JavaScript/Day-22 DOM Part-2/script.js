/**
 * ! textContent
 * ! innerText
 * ! innerHTML
 * ! outerHTML
 

const div = document.createElement("div");
div.id = "root" ;

div.innerHTML = `<div class="profile">
                        <h2>Profile Container</h2>
                </div>
                <div class="info">
                        <h2>Info Container</h2>
                </div>`
                


 <div id="root">
      <div class"profile">
              <h2>Profile Container</h2>
      </div>
      <div class"info">
               <h2>Info Container</h2>
      </div>
 </div>


const body = document.body;
body.append(div);
*/

/**
 * ! outerHTML
 
const rootDiv = document.getElementById("root");


rootDiv.outerHTML = `<section id="container">
                            <h1>Section Container</h1>
                            <p>Paragraph Tag-1</p>   
                    </section>`;

const main = document.querySelector("main");
main.outerHTML = `<article>
                        <p>I am Article Tag</p>
                  </article>`
*/

/**
 * ! getAtrribute()
 * ! setAttribute()
 * ! removeAttribute()


const div = document.getElementById("root");

const x = div.getAttribute("class")
console.log(x);

div.setAttribute("data-set","chombu chombu chombu");
div.removeAttribute("data-set");
 */

/**
 * ! remove()
 * ! removeChild()

const tag1 = document.querySelector("#root :last-child");
// tag1.remove()

const div = document.querySelector("#root");
div.removeChild(tag1);
 */
