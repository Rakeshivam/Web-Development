var a = 10;

function parent() {
  let b = 20;
  console.log(a);

  function child() {
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
  }
  child();
}

parent();
