//  find out factorial number
// 1! =1
// 2! =2*1
//  3! = 3*2*1
// 4! = 4*3*2*1
// 5! = 5*4*3*2*1
//  easy way ==  3! = 3* 2!,  
//               4! = 4*3!
//               5! = 5*4!


// 3! = 3*2!
// 3! = 3*(3-1)!
// 4! = 4*3!
// 4! = 4*(4-1)!
// 5! = 5*4!
// 5! = 5*(5-1)!

//  formula of factorial 
//  n! = n*(n-1)!



// function factorial(number){
//     let num = 1 ;
//     for(let i = 1; i <= number ; i++){
//         num = num * i;

//     }
//     return num;
// }



// const total = factorial(5);
// console.log(total);



//  reverse way

function factorial(number){
    let num = 1 ;
    for(let i = number; i >= 1 ; i--){
        num = num * i;

    }
    return num;
}


const number = 5;
const fact = factorial(number);
console.log('factorial of', number, 'is', fact);
