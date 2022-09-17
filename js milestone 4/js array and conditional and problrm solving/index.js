var number = [12, 21, 23, 42, 9, 76 ]; 

//  get element by index
console.log(number[5]);

//  same output by var

var number = [12, 21, 23, 42, 9, 76 ]; 

//  get element by index
var element = number[3];

console.log(element);


//  set element by index

var number = [12, 21, 23, 42, 9, 76 ]; 

number[3] = 55;
console.log(number);



// find index of an element 
var positionIndex = number.indexOf(9);
console.log(positionIndex);



// find index of an element     find index of an element that is not in the array. it will result   
var positionIndex = number.indexOf(99);
console.log(positionIndex);