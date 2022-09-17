//   problem 1

//  function getLargestnumber(num1, num2, num3){
//     if(num1 > num2 && num1> num3){
//         console.log(num1, 'is the largest number')
//     }
//     else if (num2 > num1 && num2 > num3){
//         console.log(num2, 'is the largest number')
//     }
//     else{
//         console.log(num3, 'is the largest number')
//     }
// }

// getLargestnumber(222, 44, 99)



//  problem 1 using math.max()

// function getLargestnumber(num1, num2, num3){
//     let large = Math.max(num1, num2, num3);
//     return large;
   
// }
// // const num1 = 33;
// // const num2 = 23;
// // const num3 = 83;
// const result  = getLargestnumber(22, 33, 55);
// // const result  = getLargestnumber(num1, num2, num3);
// console.log(result, 'is the largest number');




// problem 2 

//  function getLargestnumber(num1, num2, num3){
//     if(num1 < num2 && num1 < num3){
//         console.log(num1, 'is the lowest number')
//     }
//     else if (num2 < num1 && num2 < num3){
//         console.log(num2, 'is the lowest number')
//     }
//     else{
//         console.log(num3, 'is the lowest number')
//     }
// }

// getLargestnumber(222, 44, 9);




//  problem 1 using math.max()

function getLargestnumber(num1, num2, num3){
    let large = Math.min(num1, num2, num3);
    return large;
   
}
// const num1 = 33;
// const num2 = 23;
// const num3 = 83;
const result  = getLargestnumber(232, 333, 535);
// const result  = getLargestnumber(num1, num2, num3);
console.log(result, 'is the lowest number');
