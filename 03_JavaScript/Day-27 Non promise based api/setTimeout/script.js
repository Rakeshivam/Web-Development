/**
 * ! Non-Promise Based APIs
 *   - setTimeout()
 *   - setInterval()
 *   - Drawbacks of callback
 */

console.log("Start");

setTimeout(function task1(){
    console.log("Async Task-1");
    
for(let i = 0 ; i < 1000000000;i++){}

for(let j = 0 ; j < 1000000000;j++){}
for(let j = 0 ; j < 1000000000;j++){}
for(let j = 0 ; j < 1000000000;j++){}
for(let j = 0 ; j < 1000000000;j++){}
for(let i = 0 ; i < 1000000000;i++){}

for(let j = 0 ; j < 1000000000;j++){}
for(let j = 0 ; j < 1000000000;j++){}
for(let j = 0 ; j < 1000000000;j++){}
for(let j = 0 ; j < 1000000000;j++){}

    setTimeout(function wildcard(){
        console.log("wildcard async task")
    }, 0);
}, 2000);

const s1 = performance.now()

for(let i = 0 ; i < 1000000000;i++){}

for(let j = 0 ; j < 1000000000;j++){}

const s2 = performance.now()
console.log(s2-s1);

setTimeout(function task2(){
    console.log("Async Task-2");
}, 1000);

console.log("End");