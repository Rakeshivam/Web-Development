

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => console.log("Users in second then:",data))
//   .catch(error => {
//     console.log("Error Name:",error.name);
//     console.log("Error Message:",error.message);
//   })


// fetch("https://jsonplaceholder.typicode.com/posts")
//  .then(response => response.json())
//  .then(val => console.log("posts in second then:",val))
//  .catch(error=> console.log(error))


/**
Promise.all( [
                fetch("https://jsonplaceholder.typicode.com/users"),
                fetch("https://jsonplaceholder.typicode.com/posts"),
                fetch("https://jsonplaceholder.typicode.com/albums")
            ])
  .then(([userRes,postsRes,albumsRes])=>{
     console.log("userRes:",userRes);
     console.log("postsRes:",postsRes);
     console.log("albumsRes:",albumsRes);

     return Promise.all([userRes.json(), postsRes.json() ,albumsRes.json()])
  })
  .then(([users,posts,albums])=>{
    console.log("users:",users);
    console.log("posts:",posts);
    console.log("albums:",albums);
  })
  .catch(err=>{
    console.log(err.name)
    console.log(err.message)
  })
*/

/**
res1=  [10  users object]
res2= [100 posts object]
res3= [100 albums object]

res1 = { header:{} , body:{}}
res2 = { header:{} , body:{}}
res3 = { header:{} , body:{}}
x = { 
       status: fullfilled, 
       value: [ 
                  { header:{} , body:{}} ,
                  { header:{} , body:{}} ,
                  { header:{} , body:{}}
              ]
      }



const x = Promise.allSettled( [
                fetch("https://jsonplaceholder.typicode.com/users"),
                fetch("https://jsonplaceholder.typicode.com/posts"),
                fetch("https://jsonplaceholder.typicode.com/albums")
            ])
x 
  .then((response)=> 
  {
    console.log(response)
    return Promise.all([response[0].value.json(), response[1].value.json(),response[2].value.json()])
  }
  )
  .then(([users,posts,albums])=>{
       console.log("users:",users);
       console.log("posts:",posts);
       console.log("albums:",albums);
  })
  .catch(err=>console.log("Error:",err))
 */

 
/**
 * ! - Promise.all([p1,p2,p3])
 * ! - Promise.allSettled([p1,p2,p3])
 */
/** 
const p1 = Promise.reject({msg: "Promise Failed"});  // 1s
const p2 = Promise.resolve({msg: "Promise-2"});  // 3s
const p3 = Promise.resolve({msg: "Promise-3"});  // 2s

// const z = Promise.all([p1,p2,p3])  // 3 seconds
const z = Promise.allSettled([p1,p2,p3])  // 3 seconds
console.log("z:",z);    

 * z = { 
 *     status: fulfilled ,
 *     value: Array [ {}, {}, {}]
 * }
 * 
 * z = {
 *     status: Rejected,
 *     reason: {msg: "Promise Failed"}
 * }
 * 
 */


/**
 * ! - Promise.race([p1,p2,p3])
 * ! - Promise.any([p1,p2,p3])
 

const p1 = new Promise((resolve,reject)=>{
  setTimeout(() => {
      reject("Promise-1 Failed");
  }, 1000);
})   // 1sec - reject

const p2 = new Promise((resolve,reject)=>{
  setTimeout(() => {
      reject("Promise-2 Failed")
  }, 3000);
})  // 3sec - reject

const p3 = new Promise((resolve,reject)=>{
  setTimeout(() => {
      reject("Promise-3 Failed")
  }, 2000);
}) // 2sec - reject

const p4 = new Promise((resolve,reject)=>{
  setTimeout(() => {
      reject("Promise-4 Failed");
  }, 1000);
})  // 1sec - reject

// const x = Promise.race([p1,p2,p3,p4]);
const x = Promise.any([p1,p2,p3,p4])
console.log(x)
x
  .then((res)=>console.log(res))
  .catch(err => console.log(err.errors))
*/

// !async await

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if(!response.ok){
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    console.log("data:",data);
  } catch (error) {
    console.log("Error:",error.name);
    console.log("Error:",error.message);
  }  
}


const x = getUsers();
