// function isLeapYear(year){
//     const remainder = year % 4;
//       if(remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


// const myYear = isLeapYear(1960);
// console.log('my year:', myYear)
// const yourYear = isLeapYear(2020);
// console.log('your year:', yourYear);


//  how to find if a year is leap year or not

function isLeapYear(year){
    if (((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0)){
        console.log(year, 'is a leap year')
    }
    else{
        console.log(year, 'is not a leap year')
    } 
}
const myYear = isLeapYear(1962);
 
// another way of finding leap year
function isLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0)){
        console.log(year, 'is a leap year')
    }
    else if (year % 400 == 0){
        console.log(year, 'is a leap year')
    }
    else{
        console.log(year, 'is not a leap year')
    }
}

isLeapYear(1962);



