/**
 * ! Thrrotling and Debouncing using lodash

const searchThrottleBar = document.getElementById("searchBar1");
const searchDebouncingBar = document.getElementById("searchBar2");

const serverCall = () =>{
    console.log("API Call..!")
}

const optimizedThrottleFunction = _.throttle(serverCall, 2000,{leading:false});
searchThrottleBar.addEventListener("input",optimizedThrottleFunction);


const optimizedDebounceFunction = _.debounce(serverCall,2000);
searchDebouncingBar.addEventListener("input",optimizedDebounceFunction);
 */


/**
 * ! Throttling self
 */

const searchThrottleBar = document.getElementById("searchBar1");


const serverCall = () => {
    console.log("API Call..!!");
}

const throttle = (fn,delay) => {
    let startTime = 0;  

    const optimizedFunction = ()=> {
        let currentTime = Date.now(); 2.3
        if(currentTime - startTime >= delay) 
        {
            fn();
            startTime = currentTime;
        }
    }

    return optimizedFunction;
}


const inputCall = throttle(serverCall,2000);

searchThrottleBar.addEventListener("input", inputCall);












/**
 * ! using inbuild map function
 * const arr = [1,2,3,4,5]
const x = arr.map((element, index, array) => {
     return element * 10;
})

console.log("x:",x);
 */



/**
 * ! Using custom map function polyfill
 */
Array.prototype.customMap = function customMap(callback){
    const result = [];
    for(let i = 0; i < this.length; i++)
    {
        result.push(callback(this[i],i,this))
    }
    return result;
}

const arr = [10,20,30,40,50];

const y = arr.customMap((element,index,array)=>{
    return element**2;
});
console.log("y:",y);