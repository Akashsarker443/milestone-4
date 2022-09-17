var isGraduated = true;
var salary = 50000;
var cars = 0;

if(isGraduated == true && salary > 40000 && cars >= 1){
    console.log('eso biye kore feli')
}
else{
    console.log('tor kopale biye nai toi mor')
}

//  or condition

var isGraduated = true;
var salary = 50000;
var cars = 0;

if(isGraduated == true || salary > 40000 || cars >= 1){
    console.log('eso biye kore feli')
}
else{
    console.log('tor kopale biye nai toi mor')
}



var isGraduated = true;
var salary = 30000;
var cars = 0;

if((isGraduated == true && salary > 40000) || cars >= 1){
    console.log('eso biye kore feli')
}
else{
    console.log('tor kopale biye nai toi mor')
}



var isGraduated = true;
var salary = 30000;
var cars = 2;

if((isGraduated == true || salary > 40000) && cars >= 1){
    console.log('eso biye kore feli')
}
else{
    console.log('tor kopale biye nai toi mor')
}