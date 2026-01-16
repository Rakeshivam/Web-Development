const p1 = new Promise((resolve,reject) => 
                {

                    setTimeout(() => {
                        resolve("Bro tere 1000/- rs ")
                        // reject("Promise pura nhi hua..!!")
                    }, 5000);
                });


p1 
  .then((res1) =>{
        console.log("response-1:",res1);

        const p2 = new Promise((resolve,reject)=>{
            setTimeout(() => {
                // resolve("Bhai ye rhe tere 1000/- rs")
                reject("Bhai se paise lega..!")
            }, 5000);
        })

        return p2
  })
  .then((res2) =>{
        console.log("response-2:",res2);
  })
  .catch((error)=> console.log("Error:",error));




 

