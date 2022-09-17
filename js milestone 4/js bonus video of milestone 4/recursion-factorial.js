// factorial using normal formula

// let factorial = 1;
// for (let i = 5; i >= 1; i--){
//     factorial = factorial * i;

// }
// console.log(factorial);

// factorial using recursion


function factorial(i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i - 1);
}
const result = factorial(5);
console.log(result);

/* 

5 * 4
4 * 3
3 * 2
2 * 1
1



//  akhane 5 to 1 gon hobe 

*/