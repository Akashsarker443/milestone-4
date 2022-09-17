function onlineShopingCost(riceQuantity, oilQuantity, onionQuantity, saltQuantity ){
    const perKgRice = 70;
    const perKgOil = 210;
    const perKgOnion = 45;
    const perKgSalt = 30;


    const ricePrice = riceQuantity * perKgRice;
    const oilPrice = oilQuantity * perKgOil;
    const onionPrice = onionQuantity * perKgOnion;
    const saltPrice = saltQuantity * perKgSalt;

    const totalcost = ricePrice + oilPrice + onionPrice + saltPrice;
    return { ricePrice, oilPrice, onionPrice, saltPrice , totalcost};

}

const riceQuantity = 10; 
const oilQuantity = 2; 
const onionQuantity = 5;
const saltQuantity = 2;

const totalcost = onlineShopingCost(riceQuantity, oilQuantity, onionQuantity, saltQuantity);
console.log(totalcost);