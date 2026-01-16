export const sum = (a,b) =>{
    const total = a + b;
    console.log(`${a} + ${b}: ${total}`);
    return total;
}
// Named Export

export const totalAmount = (cart) =>{
      const amount = cart.reduce((acc,element)=>{
                                acc = acc + element.price;
                                return acc;
                },0);
    return amount;
}
// Named Export




/**
 * 1. export :- Named export
 * 2. export default :- Default export
 */