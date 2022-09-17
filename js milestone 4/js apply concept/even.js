function isEven(number){
    const remainder = number % 2;
    if (remainder === 0 ){
        console.log('This is an even number')
    }
    else{
        console.log('This is an odd number')
    }
}

const myNumber =isEven(333);
const yourNumber = isEven(4455);





// function isEven(number){
//     const remainder = number % 2;
//     if (remainder === 0 ){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const myNumber =isEven(333);
// console.log(myNumber);
// const yourNumber = isEven(4450);
// console.log(yourNumber);
