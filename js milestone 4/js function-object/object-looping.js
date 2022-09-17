//  array vs object

// array 
var myLaptop = ['brand', 'price', 'storage', 'processor'];
// array 
var friends = ['kamal', 'jamal', 'ramal', 'tomal'];

// object 
var myComputer ={
    brand: 'lenovo',
    price: 39000,
    storage: '264gb',
    processor: 'core i5'
}
// object 
var friends ={
    kamal: 23,
    jamal: 21,
    ramal: 20,
    tomal: 28,
}

//  array te amra sodo akta element nia kaj korte pari jemon price ba kamal kinto pasapasi price koto ba kamal ar age koto ta nia kaj korte pari na . ajonno amra object use kori. object e agolo aksathe nia kaj kora jai.







var myComputer ={
    brand: 'lenovo',
    price: 39000,
    storage: '264gb',
    processor: 'core i5',
    generation: '7gen'
}
var keys = Object.keys(myComputer);
console.log(keys)
var values = Object.values(myComputer);
console.log(values)


for(var i = 0; i <keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = myComputer[propertyName];
    console.log(propertyName, propertyValue)

}