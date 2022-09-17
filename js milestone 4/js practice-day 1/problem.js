// var myGpa = 4.92;
// var gpa = parseInt(myGpa);
// console.log(gpa)



// var myGpa = '4.92';
// var gpa = parseFloat(myGpa);
// gpa = gpa.toFixed(1)
// console.log(gpa)



// var items = ['apple', 'banana', 'mango', 'orange'];
// console.log(items[2])



// var items = ['apple', 'banana', 'mango', 'orange'];
// items[3]= 'watermelan';
// console.log(items)


// var items = ['apple', 'banana', 'mango', 'orange'];
// items =items.indexOf('mango');
// console.log(items)


// var items = ['apple', 'banana', 'mango', 'orange'];
// items.push('akash');
// console.log(items)



// var items = ['apple', 'banana', 'mango', 'orange'];
// items.pop();
// console.log(items)



/* var items = ['apple', 'banana', 'mango', 'orange'];
items.unshift('Jackfruit');
console.log(items)
 */

/* 
var items = ['apple', 'banana', 'mango', 'orange'];
items.shift();
console.log(items)
 */


// var money = 65000;

// if( money > 80000){
//     console.log('You will buy Mac')
// }
// else if (money > 60000){
//     console.log('You will buy gaming laptop')
// }
// else if(money > 40000){
//     console.log('You will buy lenovo yoga')
// }
// else if (money > 20000){
//     console.log('You will buy an used laptop')
// }
// else{
//     console.log('You have to continue your course with your mobile')
// }


// ajke amer mon balo nei 39 ber show korbe

// var num = 0;
// while(num < 40){
//     console.log('ajke amer mon balo nei')
//     console.log(num)
//     num++;
// }


// display from 58 to 98 

// for (var i = 58; i <= 98; i++){
//     console.log(i)
// }


// display all the odds number between 581 and 623 

// var num = 581;
// while(num <= 623){
//     console.log(num)
//     num = num + 2;
// }


// display all the even number between 412 and 456

// var num = 412;
// while(num <= 456){
//     console.log(num)
//     num = num + 2;
// }


//  display what all the element of an array
// var courses = ['html', 'css', 'bootstrap', 'tailwind css', 'javascript running']
// for(var i = 0; i < courses.length; i++){
//     var course = courses[i];
//     console.log(course)
// }

// display those phones that you used in your life so far

// var phones = ['samsung', 'oppo', 'realme', 'htc'];
// var i = 0;
// while(i < phones.length){
//     var phone = phones[i];
//     i++
//     console.log(phone)
// }


// display from 30 to 80 using break

// for (var i = 30; i <= 86; i++){
//     if(i > 44){
//         break;
//     }
//     console.log(i)
// }


//  use of continue 

var bookPrice =[44, 233, 120, 550, 330, 165, 225, 410];

for(var i = 0; i < bookPrice.length; i++){
    var price = bookPrice[i];
    if (price > 200)
       continue;
    console.log(price)

}


