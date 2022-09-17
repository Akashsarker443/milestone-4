/*---------problem 27 -----------*/

// function getAverage(num1, num2, num3){
//     const total = num1 + num2 + num3;
//     const average = total / 3;
//     return average;
// }
// const result = getAverage(6, 5, 55);
// console.log(result)


/*---------problem 28 -----------*/

// function make_avg(numbers){
//     let sum = 0;
    
//     for(i = 0; i < numbers.length; i++){
//         const number = numbers[i];
//         sum = sum + number;
//        average = sum / numbers.length;

//     }
//     return {average, sum};
// }
// const inputgiven = [35, 5, 20, 10, 15, 8, 7];
// console.log(make_avg(inputgiven));



/*---------problem 28 [another way using const/let outside for loop]-----------*/

// function make_avg(numbers){
//     let sum = 0;
    
//     for(i = 0; i < numbers.length; i++){
//         const number = numbers[i];
//         sum = sum + number;
       

//     }
//     const average = parseFloat((sum / numbers.length).toFixed(2));
//     return {average, sum};
// }
// const inputgiven = [35, 5, 20, 10, 15, 8, 7];
// console.log(make_avg(inputgiven));




/*---------problem 29 -----------*/

// function odd_even(number){
   
//     if(number % 2 == 0){
//         return 'This is an even number';
//     }
//     else if ( number % 2 == 1){
//         return 'This is an odd number';
//     }
// }
// console.log(odd_even(885));


/*---------problem 30 -----------*/


// function getSignal(signal){
//     const signallower = signal.toLowerCase();
//     if(signallower == 'red'){
//         return "Please don't cross the road right now. It may cause danger for you";
//     }
//     else if (signallower == 'yellow'){
//         return 'Please wait for a few munites until the raod gets empty';

//     }
//     else if (signallower == 'green'){
//         return "please go ahead. the road is free to cross"
//     }
//     else{
//         return 'please enter a valid signal';
//     }
// }
// console.log(getSignal('green'));


/*---------problem 32 -----------*/

// function getLowerCase(srting){
//     const stringLower = srting.toLowerCase();
//     console.log(stringLower);
// }

// getLowerCase('Akash Sarker');

/*---------problem 33 -----------*/


// function fullName(firstName, lastName){
//     const fullName = firstName.concat(' ', lastName);
//     console.log(fullName);
// }
// fullName('nama', 'jssj');


/*---------problem 33  another way-----------*/

// function fullName(firstName, lastName){
//     // firstName = firstName.toLowerCase();
//     // lastName = lastName.toLowerCase();
//     const array = [firstName, lastName];
//     const newName = array.join(" ");

//    console.log(newName);
 
// }
// fullName('Emran', 'Sarker');


/*--------- problem 34 -----------*/


// function getSquare(number){
//     const square = number * number;
//     return square;
// }
// const result = getSquare(3);
// console.log(result);



//  extra problem 3 cubes

// function getSquare(number){
//     const square = number * number;
//     const cubes = square * number;
//     return cubes;
// }
// const result = getSquare(5);
// console.log(result);



/*--------- problem 35 -----------*/

// function getMinutes(hour){
//     const minute = hour * 60;
//     return minute;
// }
// const result = getMinutes(4);
// console.log(result);

/*--------- problem 36 -----------*/


// function findLeapYear(years){
//     let leapyear = [];
//     for( let i = 0; i < years.length; i++){
        
//         const year = years[i];
//         if((year % 4 == 0) && (year % 100 != 0)){
//             leapyear.push(year);
//         }
//         else if (year % 400 == 0){
//             leapyear.push(year);
//         }
        
//     }
//     return leapyear;
// }
// const years = [2023, 2024, 2025, 2028, 2030, 1900, 2032];
// const result = findLeapYear(years);
// console.log(result);


/*--------- problem 36  another way-----------*/



// function findLeapYear(years){
//     let leapyear = [];
//     for( let i = 0; i < years.length; i++){
         
//         const year = years[i];
//         if (((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0)){
//             leapyear.push(year);
//         }
        
//     }
//     return leapyear;
//     }
// const years = [2023, 2024, 2025, 2028, 2030, 1900, 2032];
// const result = findLeapYear(years);
// console.log(result);



/*--------- problem 37 -----------*/


// function findLeapYear(numbers){
//     let oddNumbers = [];
//     let sum = 0;
//     for( let i = 0; i < years.length; i++){
         
//         const element = numbers[i];
//         if (element % 2 == 1){
//             sum += element;
//             oddNumbers.push(element);
//         }
        
//     }
//     return {oddNumbers, sum};
//     }
// const years = [22, 20, 44, 30, 33, 45, 77, 11, 13, 15, 65, 99];
// const result = findLeapYear(years);
// console.log(result);


/*--------- problem 39-----------*/


// function odd_even(number){
   
//     if(number % 2 == 0){
//         return 'your age is an even number';
//     }
//     else if ( number % 2 == 1){
//         return 'your age is an odd number';
//     }
// }
// console.log(odd_even(55));


/*--------- problem 44-----------*/

// function celciusToFarenhite(celcius){
//     const farenhite = (celcius * 9/5) + 32;
   
//     console.log(farenhite);
// }
// celciusToFarenhite(33);