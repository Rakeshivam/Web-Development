var a = 1;

let b = 2;

const c = 3;

{
  // var a = 10;
  let a = 20;
  const c = 30;
  d = 40;
  console.log("Inside a block");
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  console.log(`c: ${c}`);
  console.log(`d: ${d}`);
}

console.log("Outside a block");
console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
console.log(`d: ${d}`);








