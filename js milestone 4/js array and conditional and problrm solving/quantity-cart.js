const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 3 },
    { name: 'pant', price: 3400, quantity: 5 },
    { name: 'belt', price: 200, quantity: 3 },
    { name: 'sunglass', price: 600, quantity: 2 },


];
function totalCost(products){
    let sum = 0;
    for(i = 0; i < products.length; i++){
        const product = products[i];
        const  productTotal = product.price * product.quantity;
        sum = sum + productTotal;

    }
    return sum;
}

const totalexpense = totalCost(shoppingCart);
console.log(totalexpense);