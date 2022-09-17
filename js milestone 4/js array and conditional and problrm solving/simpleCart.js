const shoppingCart = [
    { name: 'shoe', price: 1200},
    { name: 'shirt', price: 2200},
    { name: 'pant', price: 3400},
    { name: 'belt', price: 200},
    { name: 'sunglass', price: 600},


];
function totalCost(products){
    let sum = 0;
    for(i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;

    }
    return sum;
}

const totalexpense = totalCost(shoppingCart);
console.log(totalexpense);