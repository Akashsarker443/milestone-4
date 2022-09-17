function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}

var total = add(44, 33);
console.log('total:', total);






// function bringApple(money){
//     var applePrice = 120;
//     var quantity = money / applePrice;
//     console.log(money, 'takai apni paben', quantity, 'kg apple');
//     return quantity;
// }

// bringApple(400);


// doing same function using var


// function bringApple(money){
//     var applePrice = 120;
//     var quantity = money / applePrice;
//     console.log(money, 'takai apni paben', quantity, 'kg apple');
//     return quantity;
// }

// var givenmoney = 360;
// bringApple(givenmoney);




function bringApple(money){
    var applePrice = 120;
    var quantity = money / applePrice;
    return quantity;
}

var givenApple = bringApple(650);
console.log( ' ai takai apni paben', givenApple, 'kg apple');








