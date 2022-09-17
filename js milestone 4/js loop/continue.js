var numbers = [12, 23, 45, 34, 34, 66, 88, 77, 66, 53, 23];
 
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 45){
        continue;
    }
    console.log(number)
}
