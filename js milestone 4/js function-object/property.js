var myComputer ={
    brand: 'lenovo',
    price: 39000,
    storage: '264gb',
    processor: 'core i5'
}
// console.log(myComputer)
// console.log(myComputer.price);

// using var and when you know the property name 
var countGb = myComputer.storage;
// console.log(countGb)
// alternative way
var findBrand = myComputer['price'];
// console.log(findBrand)

//  a bit different 
var propertyName = 'price';
var propertyValue = myComputer[propertyName];
console.log(propertyName, propertyValue)


////  how to change properties value in different ways
myComputer.price = 55000;
console.log(myComputer)

myComputer['price'] = 777000;
console.log(myComputer)
myComputer[propertyName] = 800000;
console.log(myComputer)






// how to find all the properties/keys 

var properties = Object.keys(myComputer);
console.log(properties)

// how to find all the values of  properties/keys 

var propertiesValue = Object.values(myComputer);
console.log(propertiesValue)

