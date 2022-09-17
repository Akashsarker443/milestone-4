//  problem 1
 
var fruits = ['Apple', 'Banana', 'Orange'];
var position = fruits.indexOf('Banana');
console.log(position);
fruits[1] = 'mango';


console.log(fruits);;


fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);


//  problem 2

var score = 95;
if (score >= 80){
    console.log('you got A.')
    if(score >= 90){
        console.log('Congratulation! You got A +')
    }
    else{
        console.log('Congratulation! Better luck.Keep trying to get A+ ')
    }

}
else if(score >= 60){
    console.log('You got B grade')
}
else if(score >= 50){
    console.log('You got c grade')
}
else if(score >= 40){
    console.log('You got d grade')
}
else{
    console.log('You failed. Best wishes for next time.')
}

// problem 3

var num1 = 55;
var num2 = 45;
var num3 = 75;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1)
    }
    else{
        console.log(num3)
    }
}
else{
    if(num2 > num3){
        console.log(num2)

    }
    else{
        console.log(num3)
    }
}

// problem 4

var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('isosceles')
}
else{
    console.log('This is not isosceles')
}