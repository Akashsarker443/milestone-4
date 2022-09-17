// function getLeapYear(year){
//     if(((year % 4 == 0) && (year % 100 != 0)) || (year % 100 == 0)){

//         console.log(year, 'is a leap year')
//     }
//     else{
//         console.log('this is not a leap year')
//     }
// }

// const yearInput = 1900;
// const result =  getLeapYear(yearInput);


//  another way

function getLeapYear(year){
    if(year % 4 == 0){
        if(year % 100 != 0){
            console.log('this is a leap year')
        }
        else{
            console.log('not a leap year')
        }
    }
    else if (year % 400 == 0){
        console.log('this is a leap year')
    }
    else{
        console.log('not leap year')
    }
}

const yearInput = 1900;
const result =  getLeapYear(yearInput);



 

 