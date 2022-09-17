// problem 2 

function getLargestnumber(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        console.log(num1, 'is the lowest number')
    }
    else if (num2 < num1 && num2 < num3){
        console.log(num2, 'is the lowest number')
    }
    else{
        console.log(num3, 'is the lowest number')
    }
}

getLargestnumber(222, 44, 9);