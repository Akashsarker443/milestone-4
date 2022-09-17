// function getSumOfAnArray(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         console.log(i, element)
//     }
// }


// const myNumbers = [12, 45, 66, 66,21, 11, 15, 55, 87];
// getSumOfAnArray(myNumbers);


//  get the sum of an array

// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         sum = sum + element;
//         console.log(i, element, sum)
//     }
//     return sum;
// }


// const myNumbers = [12, 45, 66, 66,21, 11, 15, 55, 87];
// getSumOfAnArray(myNumbers);



//  get odd numbers sum of an array


// function getOddnumbersOfAnArray(numbers){
//     const oddNumbers = [];
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if(element % 2 != 0){
//             console.log(i, element);
//             oddNumbers.push(element);

//         }
        
//     }
//     return oddNumbers;
// }



// const myNumbers = [12, 45, 66, 66,21, 11, 150, 55, 87];
// const oddNumbers = getOddnumbersOfAnArray(myNumbers);

// console.log(oddNumbers)




// 



//  get odd numbers sum of an array


function getOddnumbersOfAnArray(numbers){
    let sum = 0;
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element % 2 != 0){
            oddNumbers.push(element);
            sum = sum + element;
            console.log(i, element);

        }
        
    }
    return sum;
}



const myNumbers = [12, 45, 66, 66,21, 11, 150, 55, 87];
const oddNumbers = getOddnumbersOfAnArray(myNumbers);

console.log(oddNumbers);

