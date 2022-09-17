// problwm 1

var money = 1000;
var mangoPrice = 400;
var orangePrice = 350;
var totalPrice = mangoPrice + orangePrice;
var backMoney = money - totalPrice;
console.log(backMoney);


// problwm 2

var math = 75;
var biology = 65;
var chemistry = 77;
var physics = 45;
var bangla = 55;
var totalMarks = math + biology + chemistry + physics + bangla;
var average = totalMarks / 5;
console.log(average)

var math = 75.5;
var biology = 65;
var chemistry = 77;
var physics = 45.6;
var bangla = 55.2;
var totalMarks = math + biology + chemistry + physics + bangla;
var average = totalMarks / 5;
console.log(average)


// adding tofixed 

var math = 75.5;
var biology = 65;
var chemistry = 77;
var physics = 45.6;
var bangla = 55.2;
var totalMarks = math + biology + chemistry + physics + bangla;
var average = totalMarks / 5;
average = average.toFixed(3);
console.log(average)



// adding parsefloat

var math = 75.5;
var biology = 65;
var chemistry = 77;
var physics = 45.6;
var bangla = 55.2;
var totalMarks = math + biology + chemistry + physics + bangla;
var average = totalMarks / 5;
average = average.toFixed(3);
average = parseFloat(average);
console.log(average)


// problwm 3

var text1 = 'I am going to be';
var text2 = 'an web developer';
var fullText = text1 + text2;
console.log(fullText);



var text1 = 'I am going to be';
var text2 = 'an web developer';
var fullText = text1 + '' + text2;
console.log(fullText);





var text1 = 'I am going to be';
var text2 = 'an web developer';
var fullText = text1 + ' ' + text2;
console.log(fullText);


// problwm 4

var totalMoney = 119;
var labour = 5;
var remainder = totalMoney % labour;
console.log(remainder);


var totalMoney = 119;
var labour = 10;
var remainder = totalMoney % labour;
console.log(remainder);