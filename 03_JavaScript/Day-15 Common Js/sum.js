const sum = (a,b) =>{
    const total = a + b;
    console.log(`${a} + ${b}: ${total}`);
    return total;
}


const totalAmount = (cart) =>{
      const amount = cart.reduce((acc,element)=>{
                                acc = acc + element.price;
                                return acc;
                },0);
    return amount;
}

module.exports = {
    sum,
    totalAmount
};