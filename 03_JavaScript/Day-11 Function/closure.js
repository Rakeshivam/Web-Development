/**
 * ! Closure
 * Disadvantage:- High Memory Consumption.


const outer = () => {
  console.log("Inside outer function");
  const a = 10;
  const b = 20;

  const inner = () => {
    console.log("Inside Inner Function");
    console.log("a:", a);
    console.log("b:",b);
  };

  return inner;
};

const res = outer();
console.log("res:", res);
res();
 */


/**
 * ! Lexical Scope:- (global + script) scope +  task scope 
 *                    { task: f(){}}             { a: 10 }
 */     



const a = 100;

function outer()
{
    const b = 10;

    const inner = ()=>{
        const c = 30;
        console.log("a:",a);
        console.log("b:",b);
        console.log("c:",c);
    }

    inner();
}

outer();
