// function getLargestNum(num1, num2, num3){
//     if((num1 > num2) && (num1 > num3)){
//         console.log(num1, 'is the largest number')
//     }
//     else if ((num2 > num1) && (num2 > num3)){
//         console.log(num2, '  is the largest number')
//     }
//     else{
//         console.log(num3, 'is the largest number')
//     }
    
// }

// getLargestNum(55, 66, 12);
   
//  another way 

function getLargestNum(num1, num2, num3){
    if(num1 > num2){
        if(num1 > num3){
            console.log(num1, 'is the largest number')
        }
        console.log(num3, 'is the largest number')
    }
    else if (num2 > num3){
        console.log(num2, 'is the largest number')
    }
    else{
        console.log(num3, "is the largest number")
    }

}

getLargestNum(5.7, 6, 12);