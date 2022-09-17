// //  add 1 to 7 numbers  [ eta best practice]

// function adds(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         sum = sum + element;
//     }
//     return sum;
// }
// const number =[1, 2, 3, 4, 5, 6, 7];
// const total = adds(number);
// console.log(total);

// //  add 1 to 7 numbers without using elelment = numbers[i];

function adds(numbers){
    let sum = 0;
    for(let i = 1; i <= numbers.length; i++){
        
        sum = sum + i;
    }
    return sum;
}
const number =[1, 2, 3, 4, 5, 6, 7];
const total = adds(number);
console.log(total);





//  multiply 1 to 5 numbers [ eta best practice]

// function multiply(numbers){
//     let sum = 1;
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//          sum = sum * element;
        
//     }
//     return sum;
// }
// const number =[1, 2, 3, 4, 5];
// const total = multiply(number);
// console.log(total);





//  multiply 1 to 5 numbers without element = numbers[i]

// function multiply(numbers){
//     let sum = 1;
//     for(let i = 1; i <= numbers.length; i++){

//          sum = sum * i;
        
//     }
//     return sum;
// }
// const number =[1, 2, 3, 4, 5];
// const total = multiply(number);
// console.log(total);
