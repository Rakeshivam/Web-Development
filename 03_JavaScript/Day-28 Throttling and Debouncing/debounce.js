const searchBar = document.getElementById("searchBar");

// callback
const serverCall = ()=>{
    console.log("API Calling..!")
}

/** */


// Higher order function
const debounce = (fn, delay)=>{
    let timerId;

    // callback function
    const optimizedFunction = ()=>{
        if(timerId)
        {
            clearTimeout(timerId);
        }

        timerId = setTimeout(fn,delay);
    }

    return optimizedFunction;
}
const inputCall = debounce(serverCall,2000);


const inputCall = _.debounce(serverCall,2000);


searchBar.addEventListener("input",inputCall);


